import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Feedback = () => {
  return (
    <div className="max-w-[1440px] flex justify-center mx-auto my-8 mg:my-10 lg:my-14">
      <div className="w-full mx-5 lg:w-3/4 lg:mx-0">
        <h1 className="text-2xl lg:text-3xl mb-2">LEAVE A COMMENT</h1>
        {/* Reply Form */}
        <form action="w-full md:w-1/2 flex flex-col gap-4">
          <textarea className="border border-black p-2 w-full mb-2" name="" rows="5" placeholder="Leave your comment here..."></textarea>
          <Input className="border-black mb-4" placeholder="Full Name (Optional)" />
          <Input className="border-black mb-4" placeholder="Email Address" />
          <p className="text-red-400 mb-4 text-sm">
            <b>NOTE:</b> YOUR EMAIL ADDRESS WILL NOT BE PUBLISHED.
          </p>
          <Button className="rounded-none border border-black hover:bg-transparent transiton-all ease-in-out duration-500">Post Comment</Button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
