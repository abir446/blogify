import Form from "@/components/Form";
import Postlist from "@/components/post-list";
import Link from "next/link";
import { Suspense } from "react";

export default async function Posts() {

    
    return (
      <main>
        <h1 className="text-center pt-16  text-4xl font-bold mb-5">All Posts</h1>
        <Suspense fallback="Gathering information...">
          <Postlist />

        </Suspense>
        {/* <Form /> */}
      </main>
    );
  }
  