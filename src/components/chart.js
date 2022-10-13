import { ResponsiveBar } from "@nivo/bar";

const Chart = ({ data, maxValue = 20, isVertical = true, ...props }) => {

    return (
        <ResponsiveBar
          data={data}
          indexBy="id"
          margin={{ top : 30, bottom: 30, left : 30, right : 30 }}
          padding={0.4}
          //groupMode="grouped"
          layout={isVertical? "vertical" : "horizontal"}
          colors={data.map(c => c.color)}
          colorBy="index"
          maxValue={maxValue}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          fill={[]}
          borderColor={{ from: "color", modifiers: [["brighter", "1.6"]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: 23
          }}
          axisLeft={{
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          enableGridX={true}
          enableGridY={false}
          labelSkipWidth={42}
          labelSkipHeight={12}
          labelFormat={d => (
            <tspan style={{ fontSize: 16 }}>
              {this.props.prefix}
              {d}
              {this.props.postfix}
            </tspan>
          )}
          labelTextColor="#fff"
          legends={[]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          theme={{
            axis: {
              ticks: {
                line: {
                  stroke: "gray"
                },
                text: {
                  fontSize: "14px",
                  fill: "#000",
                  wordWrap: "break-word"
                }
              }
            }
          }}
          {...props}
        />
    )
}

export default Chart;