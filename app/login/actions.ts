"use server";

const handleForm = async (prevState: any, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("server!", prevState);
  //   formData.get("password")

  return {
    error: "wrong!",
  };
};

export default handleForm;
