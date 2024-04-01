"use client"
import { Bell } from "lucide-react";

export default function Home() {

  const clickHandler = () => {
    Notification.requestPermission().then(perm => {
      if (perm == 'granted') {
        const notification = new Notification("Example", {
          body: "Hi there : click to close it",
        })
        notification.addEventListener('click', () => {
          notification.close();
        });

        // Remove the notification after 5 seconds (5000 milliseconds)
        setTimeout(() => {
          notification.close();
        }, 5000);
      }
    })
  }

  return (
    <main className="min-h-screen bg-black flex flex-col  justify-around items-center">
      <div className=" flex flex-col gap-4">
        <h1 className="text-center text-white text-3xl">Lorem Ipsum...</h1>
        <h1 className="text-center text-white text-2xl  opacity-40">Lorem ipsum dolor sit amet.</h1>
      </div>

      <div className=" rounded-full bg-orange-500  relative p-6">
        <Bell color="white" height={100} width={100} />
        <div className="bg-orange-600 absolute animate-ping  duration-700 top-0 left-0 h-36 w-36 rounded-full">
        </div>
      </div>

      <button
        onClick={clickHandler}
        className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg text-xl px-5 font-semibold py-2.5 text-center me-2 mb-2 dark:border-orange-400 dark:text-orange-400 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-900">
        Send Notification
      </button>
    </main>
  );
}
