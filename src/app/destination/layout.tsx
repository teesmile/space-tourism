import Header from "@/components/layout/Header";
import PageBackground from "@/components/layout/pageBackground";

export default function DestinationLayout({children}: {children: React.ReactNode}){
    return (
        <PageBackground route="destination">
            <Header />
            {children}
        </PageBackground>
    )
}