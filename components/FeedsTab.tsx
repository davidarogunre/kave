import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeedsTab(){
    return(
        <div>
            <Tabs defaultValue="foryou" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="foryou">For you</TabsTrigger>
    <TabsTrigger value="following">Following</TabsTrigger>
    <TabsTrigger value="topic">Topic</TabsTrigger>
  </TabsList>
  <div className="bg-slate-500 relative bottom-1 w-[600px] h-[0.0125rem]"></div>

  <TabsContent value="foryou">Make changes to your account here.</TabsContent>
  <TabsContent value="following">Change your password here.</TabsContent>
  <TabsContent value="topic">Change your password here.</TabsContent>

</Tabs>

        </div>
    )
}