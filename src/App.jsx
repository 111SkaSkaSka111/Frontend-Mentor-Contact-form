import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [data, setData] = useState("");

    function onSubmit(data) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setData(data);
        reset();
        setTimeout(() => setData(""), 2000);
    }
    return (
        <section className="wrapper">
            <header>
                <h1>Contact Us</h1>
            </header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group-flex grid">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" className={errors.firstName && "errors"} {...register("firstName", { required: true })} />
                        {errors.firstName && <p className="error">First Name is required</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" className={errors.lastName && "errors"} {...register("lastName", { required: true })} />
                        {errors.lastName && <p className="error">Last Name is required</p>}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" className={errors.email && "errors"} {...register("email", { required: true })} />
                    {errors.email && <p className="error">Please enter a valid email address</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="queryType">Query Type</label>
                    <div className="form-group-flex grid">
                        <div className="border">
                            <input type="radio" id="generalEnquiry" name="queryType" value="generalEnquiry" {...register("queryType", { required: "Query Type is required" })} />
                            <label htmlFor="generalEnquiry" className="not">
                                General Enquiry
                            </label>
                        </div>
                        <div className="border">
                            <input type="radio" id="supportRequest" name="queryType" value="supportRequest" {...register("queryType", { required: "Query Type is required" })} />
                            <label htmlFor="supportRequest" className="not">
                                Support Request
                            </label>
                        </div>
                    </div>
                    {errors.queryType && <p className="error">Please select a query type Message</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" className={errors.message && "errors"} {...register("message", { required: true })} rows={5}></textarea>
                    {errors.message && <p className="error">Message is required</p>}
                </div>
                <div className="form-group">
                    <div className="form-group-flex-checkbox flex">
                        <input type="checkbox" id="consent" name="consent" {...register("consent", { required: true })} />
                        <label htmlFor="consent">I consent to being contacted by the team</label>
                    </div>
                    {errors.consent && <p className="error">Please consent to being contacted</p>}
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div className={`thank-you ${data ? "active" : ""}`}>
                <div className="thank-you-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none" viewBox="0 0 20 21">
                        <path
                            fill="#fff"
                            d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"
                        />
                    </svg>
                    <h1>Message Sent!</h1>
                </div>
                <p>Thanks for completing the form. We'll be in touch soon!</p>
            </div>
        </section>
    );
}

export default App;
