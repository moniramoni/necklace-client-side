
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

      fetch("https://guarded-shelf-19111.herokuapp.com/makeAdmin", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
            if (data.modifiedCount) {
                console.log(data);
                // setSuccess(true);
            }
            console.log(result)
        });

        console.log(data);
    };
    return (
        <>
            <h1 className="mt-5 text-center text-dark">Make Admin</h1>
            <div className="my-5 rounded py-5 text-center text-dark bg-dark mx-5 px-1 px-sm-1 px-md-5 px-lg-5" >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="w-100 py-2"
                        name="email"
                        placeholder="Email"
                        type="email"
                        {...register("email", { required: true })}
                    />
                    <br />   
                    <input
                        className="btn bg-color-orange text-light w-100 mt-3"
                        type="submit"
                        value="make as Admin"
                    />
                </form>

            </div>
      </>
    );
};

export default MakeAdmin;