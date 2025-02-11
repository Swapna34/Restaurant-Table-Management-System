import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ChangePassword() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch(`http://localhost:8081/changePassword?u_id=${data.uid}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    currentPassword: data.currentPassword,
                    newPassword: data.newPassword,
                }),
            });

            const result = await response.text();

            if (result === "Password changed successfully") {
                alert("Password updated successfully!");
                navigate("/");
            } else {
                setErrorMessage(result);
            }
        } catch (error) {
            setErrorMessage("Server error. Please try again later.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h2 className="text-center mb-4">Change Password</h2>

                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* User ID */}
                    <div className="mb-3">
                        <label htmlFor="uid" className="form-label">User ID:</label>
                        <input
                            id="uid"
                            type="number"
                            className="form-control"
                            {...register("uid", { required: "User ID is required" })}
                        />
                        {errors.uid && <small className="text-danger">{errors.uid.message}</small>}
                    </div>

                    {/* Current Password */}
                    <div className="mb-3">
                        <label htmlFor="currentPassword" className="form-label">Current Password:</label>
                        <input
                            id="currentPassword"
                            type="password"
                            className="form-control"
                            {...register("currentPassword", { required: "Current password is required" })}
                        />
                        {errors.currentPassword && <small className="text-danger">{errors.currentPassword.message}</small>}
                    </div>

                    {/* New Password */}
                    <div className="mb-3">
                        <label htmlFor="newPassword" className="form-label">New Password:</label>
                        <input
                            id="newPassword"
                            type="password"
                            className="form-control"
                            {...register("newPassword", {
                                required: "New password is required",
                                pattern: {
                                    value: /^[A-Za-z0-9*%$@_.-]{8,12}$/,
                                    message: "Password must be 8-12 characters and include letters, numbers, or special characters (*%$@_.-)",
                                },
                            })}
                        />
                        {errors.newPassword && <small className="text-danger">{errors.newPassword.message}</small>}
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm New Password:</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            className="form-control"
                            {...register("confirmPassword", {
                                required: "Confirm password is required",
                                validate: (value) => value === watch("newPassword") || "Passwords do not match",
                            })}
                        />
                        {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword.message}</small>}
                    </div>

                    {/* Submit Button */}
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">Change Password</button>
                        <button type="reset" className="btn btn-secondary">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
