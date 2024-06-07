import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
    return (
        <div className="flex flex-col w-[30rem]">
            <h3 className="text-3xl font-rubik font-medium text-center">
                Frequently Asked Questions
            </h3>
            <p className="font-rubik text-grayish_blue w-full py-6 text-center">
                Here are some of our FAQs. If you have any other questions you’d
                like answered please feel free to email us.
            </p>
            <Accordion type="single" collapsible className="w-full py-4">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:text-soft_red hover:no-underline">
                        What is Bookmark?
                    </AccordionTrigger>
                    <AccordionContent asChild>
                        <p className="w-full leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Fusce tincidunt justo eget ultricies
                            fringilla. Phasellus blandit ipsum quis quam ornare
                            mattis.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="hover:text-soft_red hover:no-underline">
                        How can I request a new browser?
                    </AccordionTrigger>
                    <AccordionContent asChild>
                        <p className="w-full leading-8">
                            Vivamus luctus eros aliquet convallis ultricies.
                            Mauris augue massa, ultricies non ligula.
                            Suspendisse imperdiet. Vivamus luctus eros aliquet
                            convallis ultricies. Mauris augue massa, ultricies
                            non ligula. Suspendisse imperdie tVivamus luctus
                            eros aliquet convallis ultricies. Mauris augue
                            massa, ultricies non ligula. Suspendisse imperdiet.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="hover:text-soft_red hover:no-underline">
                        Is there a mobile app?
                    </AccordionTrigger>
                    <AccordionContent asChild>
                        <p className="w-full leading-8">
                            Sed consectetur quam id neque fermentum accumsan.
                            Praesent luctus vestibulum dolor, ut condimentum
                            urna vulputate eget. Cras in ligula quis est
                            pharetra mattis sit amet pharetra purus. Sed
                            sollicitudin ex et ultricies bibendum.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="hover:text-soft_red hover:no-underline">
                        What about other Chromium browsers?
                    </AccordionTrigger>
                    <AccordionContent asChild>
                        <p className="w-full leading-8">
                            Integer condimentum ipsum id imperdiet finibus.
                            Vivamus in placerat mi, at euismod dui. Aliquam
                            vitae neque eget nisl gravida pellentesque non ut
                            velit.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="flex justify-center py-8">
                <button className="font-rubik text-white rounded-md bg-soft_blue px-5 py-3 text-xs font-medium">
                    More Info
                </button>
            </div>
        </div>
    );
}
