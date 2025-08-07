
<body>
    <div class="container">
        <h1>Crane Comparison Tool</h1>
        <label for="crane1">Select Crane 1:</label>
        <select id="crane1">
            <option value="50">Crane A - 50 Tons</option>
            <option value="70">Crane B - 70 Tons</option>
            <option value="90">Crane C - 90 Tons</option>
        </select>

        <label for="crane2">Select Crane 2:</label>
        <select id="crane2">
            <option value="50">Crane A - 50 Tons</option>
            <option value="70">Crane B - 70 Tons</option>
            <option value="90">Crane C - 90 Tons</option>
        </select>

        <button class="compare-btn" onclick="compareCranes()">Compare</button>

        <table>
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>Crane 1</th>
                    <th>Crane 2</th>
                </tr>
            </thead>
            <tbody id="comparisonTable">
                <tr>
                    <td>Capacity (Tons)</td>
                    <td id="crane1Capacity"></td>
                    <td id="crane2Capacity"></td>
                </tr>
                <tr>
                    <td>Height (Meters)</td>
                    <td id="crane1Height"></td>
                    <td id="crane2Height"></td>
                </tr>
                <tr>
                    <td>Fuel Type</td>
                    <td id="crane1Fuel"></td>
                    <td id="crane2Fuel"></td>
                </tr>
                <tr>
                    <td>Price (USD)</td>
                    <td id="crane1Price"></td>
                    <td id="crane2Price"></td>
                </tr>
            </tbody>
        </table>
    </div>

    <script src="script.js"></script>
</body>

