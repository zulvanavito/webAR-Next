import { Button } from "./button";
import { Switch } from "./switch";

const FieldSignIn = () => {
  return (
    <form>
      <div className="mb-4">
        <div className="mb-4 ">
          <label className="block text-gray-700 mb-1" htmlFor="email">
            Email<sup className="text-red-500"> *</sup>
          </label>
          <input
            className="shadow-md w-full px-3 py-2 border rounded-md"
            type="email"
            required
            id="email"
            name="email"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1" htmlFor="password">
          Password<sup className="text-red-500"> *</sup>
        </label>
        <input
          className="shadow-md w-full px-3 py-2 border rounded-md"
          type="password"
          required
          id="password"
          name="password"
        />
      </div>
      <div className="flex justify-between items-center mt-5 mb-6">
        <label>
          <span className="flex items-center gap-2 text-sm text-gray-700">
            <Switch />
            Remember Me
          </span>
        </label>
        <span className="text-sm text-red-500">Forget Password?</span>
      </div>
      <Button
        type="submit"
        className="w-full shadow-lg text-white py-2 px-4 rounded-md hover:bg-primaryCustom-700"
      >
        Sign In
      </Button>
    </form>
  );
};

export default FieldSignIn;
