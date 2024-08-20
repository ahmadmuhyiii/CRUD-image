"use client";

import { useFormStatus } from "react-dom";
import { clsx } from "clsx";
import Link from "next/link";
import { deleteImage } from "@/lib/actions";

export const SubmitButton = ({label}:{label:string}) => {
    const {pending} = useFormStatus();
    return (
        <button className={clsx("bg-blue-700 text-white w-full py-2 px-4 text-base rounded-sm hover:bg-blue-600", 
            {
            "opacity-50 cursor-progress": pending
            }
            )} 
            type="submit"
            disabled={pending}>
            {label === "upload" ? (
                <>{pending ? "Uploading..." : "Upload"}</>
            ): (
                <>{pending ? "Updating..." : "Update"}</>
            )}
            </button>
    );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`edit/${id}`}
      className="inline-block w-full py-3 font-bold text-center text-white 
                uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700
                to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 
                hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85"
    >
     Edit 
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
    const deleteImageWithId = deleteImage.bind(null, id);
    return (
      <form
        action={deleteImageWithId}
        className="inline-block w-full py-3 font-bold text-center text-white 
                uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700
                to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 
                hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85"
      >
        <DeleteBtn />
      </form>
    );
  };
  
  const DeleteBtn = () => {
    const { pending } = useFormStatus();
    return (
      <button type="submit" disabled={pending}>
        {pending ? "Deleting..." : "Delete"}
      </button>
    );
  };
