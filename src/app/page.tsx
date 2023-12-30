import { ROUTES } from "@/config";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(ROUTES.home);
}
