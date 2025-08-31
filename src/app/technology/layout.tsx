import Header from "@/components/layout/Header";
import PageBackground from "@/components/layout/pageBackground";

export default function TechnologyLayout({children}: {children: React.ReactNode}){
    return (
        <PageBackground route="technology">
            <Header />
            {children}
        </PageBackground>
    )
}