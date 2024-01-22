anychart.onDocumentReady(function () {
    const data = [
        {
            "x": "IT",
            "value": 590000000,
            category: "Sino-Tibetan"
        },
        {
            "x": "Python",
            "value": 283000000,
            category: "Indo-European"
        },
        {
            "x": "소프트웨어",
            "value": 544000000,
            category: "Indo-European"
        },
        {
            "x": "JAVA",
            "value": 527000000,
            category: "Indo-European"
        }, {
            "x": "C++",
            "value": 422000000,
            category: "Afro-Asiatic"
        }, {
            "x": "HTML",
            "value": 620000000,
            category: "Afro-Asiatic"
        }
    ];
    const chart = anychart.tagCloud(data);
    chart.angles([0]);
    chart.container("container");
    // chart.getCredits().setEnabled(false);
    chart.draw();
});