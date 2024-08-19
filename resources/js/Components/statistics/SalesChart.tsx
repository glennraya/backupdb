import { TrendingUp } from 'lucide-react'
import { PiCurrencyCircleDollarDuotone } from 'react-icons/pi'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardContent,
    CardDescription
} from '@/Components/ui/card'
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent
} from '@/Components/ui/chart'

const chartConfig = {
    subscribed: {
        label: 'Subscribed',
        color: 'hsl(var(--chart-1))'
    },
    unsubscribed: {
        label: 'Unsubscribed',
        color: 'hsl(var(--chart-2))'
    }
} satisfies ChartConfig

const chartData = [
    { month: 'January', subscribed: 186, unsubscribed: 80 },
    { month: 'February', subscribed: 305, unsubscribed: 200 },
    { month: 'March', subscribed: 237, unsubscribed: 120 },
    { month: 'April', subscribed: 73, unsubscribed: 190 },
    { month: 'May', subscribed: 209, unsubscribed: 130 },
    { month: 'June', subscribed: 214, unsubscribed: 140 },
    { month: 'July', subscribed: 32, unsubscribed: 2 }
]

const SalesChart = () => {
    return (
        <Card className="h-fit w-full transition duration-300 ease-linear">
            <CardHeader>
                <CardTitle className="flex items-center justify-between text-2xl font-bold">
                    <span>Subscription Overview</span>
                    <span>
                        <PiCurrencyCircleDollarDuotone className="size-7" />
                    </span>
                </CardTitle>
                <CardDescription>
                    Average subscription per month
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={value => value.slice(0, 3)}
                        />

                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />
                        <defs>
                            <linearGradient
                                id="fillSubscribed"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-subscribed)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-subscribed)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient
                                id="fillUnsubscribed"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-unsubscribed)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-unsubscribed)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            dataKey="unsubscribed"
                            type="natural"
                            fill="url(#fillUnsubscribed)"
                            fillOpacity={1}
                            stroke="var(--color-unsubscribed)"
                            strokeWidth={2}
                            stackId="a"
                        />
                        <Area
                            dataKey="subscribed"
                            type="natural"
                            fill="url(#fillSubscribed)"
                            fillOpacity={1}
                            stroke="var(--color-subscribed)"
                            strokeWidth={2}
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Subscription up by 5.2% this month{' '}
                            <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            January - June 2024
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default SalesChart
