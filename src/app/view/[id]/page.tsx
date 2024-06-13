import { getEventByIds } from "@/accions/serverActions";
import { CardView } from "@/components/component/card-view";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function OneEvent({
  params,
}: {
  readonly params: { id: string };
}) {
  const { event, type } = await getEventByIds(params.id);
  if (event) {
    revalidatePath(`/view/${params.id}`);
  }
  if (!event) {
    redirect("/");
  }
  return (
    <div className='flex justify-center items-center w-full  h-3/4 '>
      <CardView event={event} type={type} />
    </div>
  );
}
