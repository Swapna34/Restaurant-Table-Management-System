import { useState, useReducer, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";


export default function EditManagerDetails() {
    const { id } = useParams(); // Get manager ID from URL params
    const navigate = useNavigate();
    
    const init = {
        fname: "",
        lname: "",
        contact: "",
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "update":
                return { ...state, [action.fld]: action.value };
            case "reset":
                return init;
            case "populate":
                return action.payload;
            default:
                return state;
        }
    };

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();  
    const [info, dispatch] = useReducer(reducer, init);

    useEffect(() => {
        fetch(`http://localhost:8081/getManager/${id}`)
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: "populate", payload: data });
                Object.keys(data).forEach(key => setValue(key, data[key]));
            })
            .catch(err => console.error("Error fetching data:", err));
    }, [id, setValue]);

    const updateData = (data) => {
        console.log("Updated Data:", JSON.stringify(data));
        
        fetch(`http://localhost:8081/updateManager/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
        .then(resp => {
            if (resp.ok) return resp.json();
            else throw new Error("Server error");
        })
        .then(() => {
            alert("Update successful");
            navigate("/");
        })
        .catch(() => alert("Server error... Try later"));
    };

    return (
        <div className="container mt-5">
        <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Edit Manager Details</h2>
            <form onSubmit={handleSubmit(updateData)}>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">First Name:</label>
                    <input id="fname" type="text" className="form-control" {...register("fname", { required: "First name is required" })} />
                    {errors.fname && <small className="text-danger">{errors.fname.message}</small>}
                </div>

                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Last Name:</label>
                    <input id="lname" type="text" className="form-control" {...register("lname", { required: "Last name is required" })} />
                    {errors.lname && <small className="text-danger">{errors.lname.message}</small>}
                </div>

                <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Contact No:</label>
                    <input id="contact" type="text" className="form-control" {...register("contact", { required: "Contact is required" })} />
                    {errors.contact && <small className="text-danger">{errors.contact.message}</small>}
                </div>

                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">Update</button>
                    <button type="button" className="btn btn-secondary" onClick={() => reset()}>Reset</button>
                </div>
            </form>
        </div>
    </div>
    );
}

