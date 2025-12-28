import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


const admin = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        <DashboardCard title="Sales" subtitle="Lorem ipsum" body="test"/>
        <DashboardCard title="Sales" subtitle="Lorem ipsum" body="test"/>
        <DashboardCard title="Sales" subtitle="Lorem ipsum" body="test"/>
    </div>
  )
}

type DashboardCardProps = {
  title: String
  subtitle: String
  body: String
}

const DashboardCard = ({title, subtitle, body}: DashboardCardProps) => {

  return (
        <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
        <p>{body}</p>
        </CardContent>
      </Card>
  )
}

export default admin