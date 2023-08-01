export default function EarlyAccess() {
  return (
    <div className="w-48"> {/* Set the width of the container here */}
      <form className="flex flex-col"> {/* Use flex flex-col to stack the elements vertically */}
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your Email"
          className="flex rounded mb-4 text-green-700::placeholder { color: darkgreen; }" // Add ::placeholder style
        />

        <button
          type="submit"
          className="flex rounded justify-center py-1 shadow-sm bg-green-700 text-purple-200" // Remove the 'w-1/4' class from the button
        >
          Get Early Access
        </button>
      </form>
    </div>
  );
}
