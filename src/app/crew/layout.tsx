import Header from "@/components/layout/Header";
import PageBackground from "@/components/layout/pageBackground";

export default function CrewLayout({children}: {children: React.ReactNode}){
    return (
        <PageBackground route="crew">
            <Header />
            {children}
        </PageBackground>
    )
}