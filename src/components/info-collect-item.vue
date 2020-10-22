<template>
    <div class="wrapper">
        <div class="wrapper-top">
            <div class="photo">
                <img
                    src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1112214440,2886583990&fm=26&gp=0.jpg"
                    alt=""
                />
            </div>
            <div class="chart" ref="chart"></div>
        </div>
        <div class="wrapper-bottom">
            <div class="info-wrapper">
                <span class="label">实时心率</span>
                <span class="value">68</span>
            </div>
            <div class="info-wrapper">
                <span class="label">疲劳度</span>
                <span class="value">68</span>
            </div>
            <div class="info-wrapper">
                <span class="label">情感</span>
                <span class="value">真情实感</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.setChart();
    },
    methods: {
        setChart() {
            const mychart = this.$echarts.init(this.$refs.chart);
            const option = {
                color: ["#0080FE"],
                title: {},

                grid: {
                    bottom: 20,
                    top: 30,
                    right: 30,
                    left: 30,
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "cross",
                        label: {
                            backgroundColor: "#283b56",
                        },
                    },
                },
                legend: {
                    data: ["最新成交价"],
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {},
                    },
                },
                dataZoom: {
                    show: false,
                    start: 0,
                    end: 100,
                },
                xAxis: [
                    {
                        type: "category",
                        boundaryGap: true,
                        data: (function () {
                            var now = new Date();
                            var res = [];
                            var len = 10;
                            while (len--) {
                                res.unshift(
                                    now.toLocaleTimeString().replace(/^\D*/, "")
                                );
                                now = new Date(now - 2000);
                            }
                            return res;
                        })(),
                        axisLine: {
                            lineStyle: {
                                color: "white",
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: "value",
                        scale: true,
                        name: "价格",
                        max: 30,
                        min: 0,
                        boundaryGap: [0.2, 0.2],
                        axisLine: {
                            lineStyle: {
                                color: "white",
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: "最新成交价",
                        type: "line",
                        data: (function () {
                            var res = [];
                            var len = 0;
                            while (len < 10) {
                                res.push(
                                    (Math.random() * 10 + 5).toFixed(1) - 0
                                );
                                len++;
                            }
                            return res;
                        })(),
                    },
                ],
            };

            setInterval(() => {
                var axisData = new Date()
                    .toLocaleTimeString()
                    .replace(/^\D*/, "");

                var data0 = option.series[0].data;
                data0.shift();
                data0.push((Math.random() * 10 + 5).toFixed(1) - 0);

                option.xAxis[0].data.shift();
                option.xAxis[0].data.push(axisData);

                mychart.setOption(option);
            }, 2100);
        },
    },
};
</script>

<style scoped lang="scss">
$wrapper-top-height: 200px;

$chart-width: 350px;
.wrapper {
    width: $right-width;
    height: $right-item-height;

    background: #4e4c61;

    .wrapper-top {
        width: $right-width;
        height: $wrapper-top-height;

        .photo {
            display: inline-block;
            width: $right-width - $chart-width;
            img {
                padding: 10px;
                width: calc(100% - 20px);
            }
        }

        .chart {
            box-sizing: border-box;
            display: inline-block;
            padding: 10px;
            width: $chart-width;
            height: $wrapper-top-height;
        }
    }

    .wrapper-bottom {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100px;

        .info-wrapper {
            flex: 1;
            text-align: center;
            .label {
                color: white;
            }

            .value {
                color: white;
                background: #2e2f44;
                padding: 10px;
                margin-left: 10px;
            }
        }
    }
}
</style>