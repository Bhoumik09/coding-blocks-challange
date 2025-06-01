import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ArrowRight, ExternalLink } from "lucide-react"
import { StarRating } from "./StarRating"



export default function ResumeReviews() {
    return (
        <section
            className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-16"
            style={{
                backgroundImage: "url('https://cdn.enhancv.com/images/1920/i/L19uZXh0L3N0YXRpYy9pbWFnZXMvcmV2aWV3cy1iYWNrZ3JvdW5kLWFlODlkZTlkZDQ0ZDA1NGM0MjE0ZDlhM2RjYmEzYTc1LndlYnA~.webp ')",
            }}
        >
            <div className="relative mx-auto hidden min-h-[800px] max-w-7xl lg:block">
                <Card className="absolute left-4 top-20 w-[350px] bg-white/95 p-6 shadow-lg backdrop-blur-sm">
                    <CardContent className="p-0">
                        <div className="mb-3 flex items-center justify-between">
                            <StarRating />
                            <Button variant="link" className="p-0 text-indigo-600 hover:text-indigo-800">
                                Read More
                            </Button>
                        </div>
                        <p className="mb-2 text-sm text-gray-600">2 months ago</p>
                        <p className="mb-4 text-gray-800">Hands down the best and most intuitive resume builder I've used.</p>
                        <p className="text-sm font-semibold text-gray-900">— Alex Lafreniere</p>
                    </CardContent>
                </Card>

                <Card className="absolute left-[30%] top-22 w-[380px] bg-white/95 p-6 shadow-lg backdrop-blur-sm opacity-75">
                    <CardContent className="p-0">
                        <div className="mb-4 flex">
                            <StarRating rating={4.5} />
                            <span className="ml-3 text-lg font-medium text-gray-800">4.5 Rating</span>
                        </div>
                        <p className="mb-6 text-lg text-gray-700">4,662 happy customers shared their experience.</p>
                        <Button variant="link" className="p-0 text-indigo-600 hover:text-indigo-800">
                            Read Reviews <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                    </CardContent>
                </Card>

                <Card className="absolute right-4 top-0 w-[400px] bg-white/95 p-6 shadow-lg backdrop-blur-sm">
                    <CardContent className="p-0">
                        <div className="mb-3 flex items-center justify-between">
                            <StarRating />
                            <Button variant="link" className="p-0 text-indigo-600 hover:text-indigo-800">
                                Read More
                            </Button>
                        </div>
                        <p className="mb-2 text-sm text-gray-600">2 months ago</p>
                        <p className="mb-4 text-gray-800">
                            Very visually-stunning templates and modules that can be added. I spent a few hours working on converting
                            my old 1998-style CV to a 2-page Enhancv, and very pleased with the outcome. Some nice visual options and
                            styles that can get the right message across.
                        </p>
                        <p className="text-sm font-semibold text-gray-900">— Terence Smith</p>
                    </CardContent>
                </Card>

                <Card className="absolute bottom-36 left-8 w-[320px] bg-white/95 p-6 shadow-lg backdrop-blur-sm">
                    <CardContent className="p-0">
                        <div className="mb-3 flex items-center justify-between">
                            <StarRating />
                            <Button variant="link" className="p-0 text-indigo-600 hover:text-indigo-800">
                                Read More
                            </Button>
                        </div>
                        <p className="mb-2 text-sm text-gray-600">2 months ago</p>
                        <p className="mb-4 text-gray-800">
                            I transformed my wife's boring resume into a professional and interesting resume using one of the
                            templates. She was hired within weeks at the first job she applied for. The resume isn't why she was
                            hired, but it did get her through the door quickly.
                        </p>
                        <p className="text-sm font-semibold text-gray-900">— Michael Mendoza</p>
                    </CardContent>
                </Card>
                <div>
                    <Card className="absolute bottom-48 left-[35%] w-[360px] bg-white/95 p-6 shadow-lg backdrop-blur-sm">
                        <CardContent className="p-0">
                            <div className="mb-3 flex items-center justify-between">
                                <StarRating />
                                <Button variant="link" className="p-0 text-indigo-600 hover:text-indigo-800">
                                    Read More
                                </Button>
                            </div>
                            <p className="mb-2 text-sm text-gray-600">2 months ago</p>
                            <p className="mb-4 text-gray-800">
                                Great resume tool: easy to use, user friendly, has a lot of templates, allows to make adjustments, move
                                section/blocks, very convenient. Excellent and responsive service. Will take it again for sure.
                            </p>
                            <p className="text-sm font-semibold text-gray-900">— Jennie</p>

                        </CardContent>

                    </Card>
                    <div className="absolute bottom-30 bg-white/70 rounded-lg group left-1/2 -translate-x-1/2 text-center">
                        <Button size={'lg'} variant="outline"  className="text-indigo-600 p-7 bg-transparent flex gap-2 transition-all duration-500  group-hover:gap-4 hover:text-indigo-800">
                            Read More Reviews at Reviews.io 
                            <ExternalLink className="ml-1  transition-all duration-500 " />
                        </Button>
                    </div>
                </div>


                {/* <Card className="absolute bottom-40 right-6 w-[380px] bg-white/95 p-6 shadow-lg backdrop-blur-sm">
          <CardContent className="p-0">
            <div className="mb-3 flex items-center justify-between">
              <StarRating rating={4} />
              <Button variant="link" className="p-0 text-indigo-600 hover:text-indigo-800">
                Read More
              </Button>
            </div>
            <p className="mb-2 text-sm text-gray-600">2 months ago</p>
            <p className="mb-4 text-gray-800">
              I used Enhancv service to create a resume that got recruiters attention. One of the areas that stood out
              was the ability to customize my resume to the position I was after. I would use your service again and
              tell anyone looking to create a resume to use your service. Thank you!
            </p>
            <p className="text-sm font-semibold text-gray-900">— Brett Wilson</p>
          </CardContent>
        </Card> */}

                <Card className="absolute right-16 top-[45%] w-[340px] bg-white/95 p-6 shadow-lg backdrop-blur-sm">
                    <CardContent className="p-0">
                        <div className="mb-3 flex items-center justify-between">
                            <StarRating rating={3} />
                            <Button variant="link" className="p-0 text-indigo-600 hover:text-indigo-800">
                                Read More
                            </Button>
                        </div>
                        <p className="mb-2 text-sm text-gray-600">2 months ago</p>
                        <p className="mb-4 text-gray-800">
                            The templates are professional and modern. I was able to customize everything to highlight my skills and
                            experience perfectly. Got three interview calls within a week of sending out my new resume!
                        </p>
                        <p className="text-sm font-semibold text-gray-900">— Sarah Johnson</p>
                    </CardContent>
                </Card>


            </div>

            <div className="block space-y-6 lg:hidden">
                <Card className="bg-white/95 p-6 shadow-lg backdrop-blur-sm">
                    <CardContent className="p-0">
                        <div className="mb-4 flex items-center">
                            <StarRating rating={4.5} />
                            <span className="ml-3 text-lg font-medium text-gray-800">4.5 Rating</span>
                        </div>
                        <p className="mb-6 text-lg text-gray-700">4,662 happy customers shared their experience.</p>
                        <Button variant="link" className="p-0 text-indigo-600 hover:text-indigo-800">
                            Read Reviews <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                    </CardContent>
                </Card>

                {[
                    {
                        name: "Alex Lafreniere",
                        text: "Hands down the best and most intuitive resume builder I've used.",
                    },
                    {
                        name: "Terence Smith",
                        text: "Very visually-stunning templates and modules that can be added. I spent a few hours working on converting my old 1998-style CV to a 2-page Enhancv, and very pleased with the outcome.",
                    },
                    {
                        name: "Michael Mendoza",
                        text: "I transformed my wife's boring resume into a professional and interesting resume using one of the templates. She was hired within weeks at the first job she applied for.",
                    },
                    {
                        name: "Jennie",
                        text: "Great resume tool: easy to use, user friendly, has a lot of templates, allows to make adjustments, move section/blocks, very convenient.",
                    },
                    {
                        name: "Brett Wilson",
                        text: "I used Enhancv service to create a resume that got recruiters attention. One of the areas that stood out was the ability to customize my resume to the position I was after.",
                    },
                    {
                        name: "Sarah Johnson",
                        text: "The templates are professional and modern. I was able to customize everything to highlight my skills and experience perfectly. Got three interview calls within a week!",
                    },
                ].map((review, index) => (
                    <Card key={index} className="bg-white/95 p-6 shadow-lg backdrop-blur-sm">
                        <CardContent className="p-0">
                            <div className="mb-3 flex items-center justify-between">
                                <StarRating rating={3.5} />
                                <Button variant="link" className="p-0 text-indigo-600 hover:text-indigo-800">
                                    Read More
                                </Button>
                            </div>
                            <p className="mb-2 text-sm text-gray-600">2 months ago</p>
                            <p className="mb-4 text-gray-800">{review.text}</p>
                            <p className="text-sm font-semibold text-gray-900">— {review.name}</p>
                        </CardContent>
                    </Card>
                ))}

                <div className="text-center">
                    <Button variant="link" className="text-indigo-600 hover:text-indigo-800">
                        Read More Reviews at Reviews.io <ExternalLink className="ml-1 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
