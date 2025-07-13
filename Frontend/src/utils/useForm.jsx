
import { useState } from "react";

const useForm = (initialValues, submitFunction, showToast) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "cv" && !formData[key] && key !== "email") {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
      if (key === "cv" && !formData[key]) {
        newErrors[key] = "CV file is required";
      }
    });
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  const handleSubmit = async () => {
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      showToast && showToast("Please fill in all required fields", "error");
      return;
    }

    setIsLoading(true);
    try {
      await submitFunction(formData);
      showToast && showToast("Submission successful!", "success");
      setFormData(initialValues);
      setErrors({});
    } catch (error) {
      showToast && showToast(error.message || "Submission failed", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    errors,
    isLoading,
    handleInputChange,
    handleSubmit,
  };
};

export default useForm;
