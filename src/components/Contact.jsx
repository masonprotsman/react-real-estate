import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        console.log('formData: ', formData);
        console.log('event.target: ', event.target);


        formData.append("access_key", "7add464b-ab80-4010-9966-748c13537cca");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Message sent successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
            setResult(data.message);
        }
    };

    return (
        <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decorations-1 under font-light'>Testimonials</span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let's Build Your Future Together!</p>

            <form onSubmit={onSubmit} className='max-w-2xl text-gray-600 pt-8 mx-auto'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Name
                        <input type="text" name="Name" placeholder='Your Name' required className='w-full border border-gray-300 rounded py-3 px-4 mt-2' />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Email
                        <input type="email" name="Email" placeholder='Your Email' required className='w-full border border-gray-300 rounded py-3 px-4 mt-2' />
                    </div>
                </div>
                <div className='my-6 text-left'>
                    Message
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' placeholder='Message' name='Message' required></textarea>
                </div>
                <button type="submit" className='bg-blue-600 hover:bg-blue-800 text-white px-12 py-2 rounded'>{result ? result : "Send Message"}</button>
            </form>
        </div>
    )
}

export default Contact
