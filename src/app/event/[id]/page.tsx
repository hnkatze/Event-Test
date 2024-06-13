import { getEventByIds } from "@/accions/serverActions";
import { CardEvEdit } from "@/components/CardEvEdit";

import { redirect } from "next/navigation";

async function EditTaskPage({ params }: { readonly params: { id: string } }) {
  const event = await getEventByIds(params.id);
  if (!event?.event.id) {
    redirect("/");
  }
  return (
    <div className=' flex justify-center items-center pt-10 h-screen'>
      <CardEvEdit event={event.event} />
    </div>
  );
}
export default EditTaskPage;
