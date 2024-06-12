import { handleDeleteEvent } from "@/accions/serverActions";
import { Button } from "../ui/button";

export function EventButtonDelete({ id }: { readonly id: string }) {
  return (
    <form action={handleDeleteEvent}>
      <input type='hidden' name='id' value={id} />
      <Button type='submit' className='btn btn-red bg-red-500 rounded'>
        Delete
      </Button>
    </form>
  );
}
