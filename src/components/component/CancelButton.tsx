import { redirect } from "next/navigation";
import { Button } from "../ui/button";

export async function CancelButton() {
  const cancel = async () => {
    "use server";
    redirect("/");
  };
  return (
    <form action={cancel}>
      <Button type="submit" variant="outline">
        Cancel
      </Button>
    </form>
  );
}
