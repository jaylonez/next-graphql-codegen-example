import { useState, useRef } from "react";
import {
  useAllUsersQuery,
  useSignUpUserMutation,
} from "../codegen/generated/graphql";

export default function Home() {
  const { data, loading } = useAllUsersQuery();
  const [mutating, setMutating] = useState(false);
  const [signUpUserMutation] = useSignUpUserMutation();
  const inputRef = useRef();

  const handleClick = async () => {
    if (typeof inputRef.current == "undefined") return;
    setMutating(true);
    try {
      await signUpUserMutation({
        // @ts-ignore
        variables: { data: { email: inputRef.current?.value } },
      });
    } catch (err) {
      console.log(err);
    }
    setMutating(false);
  };

  if (loading) return "Loading...";
  if (!data) return "Something went wrong";

  return (
    <main>
      {data.allUsers.map(({ email }) => (
        <div key={email}>{email}</div>
      ))}
      <label htmlFor="email">User Email</label>
      <input ref={inputRef} name="email" id="email" />
      <button disabled={mutating} onClick={handleClick}>
        Sign up User
      </button>
    </main>
  );
}
