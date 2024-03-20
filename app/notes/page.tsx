import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from '@/utils/supabase/server';
export default async function Notes() {
    const supabase = createClient();
    const { data: notes, error } = await supabase.from("notes").select();
    console.log(notes);
    console.log(error)
    return <pre>{JSON.stringify(notes, null, 2)}</pre>
}