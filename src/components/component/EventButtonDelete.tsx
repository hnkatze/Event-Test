"use client";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { handleDeleteEvent } from "@/accions/accionClient";
import { useRouter } from "next/navigation";

export function EventButtonDelete({ id }: { readonly id: string }) {
  const router = useRouter();
  const deleteEvent = (id: string) => async () => {
    try {
      await handleDeleteEvent(id);
      toast.success("Event deleted successfully");
      router.push("/");
    } catch (error) {
      console.log("Error deleting event");
    }
  };

  return (
    <>
      <input type='hidden' name='id' value={id} />
      <Button
        type='button'
        onClick={deleteEvent(id)}
        className='btn btn-red bg-red-500 rounded'>
        Delete
      </Button>
    </>
  );
}
