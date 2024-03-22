// ==UserScript==
// @name         AtCoderNotesForBeginners
// @namespace    https://github.com/AwashAmityOak
// @version      0.2.0
// @description  Show some knowledges for beginners on AtCoder.
// @author       AwashAmityOak
// @match        https://atcoder.jp/contests/*/tasks/*
// @grant        none
// @copyright    2024 AwashAmityOak (https://github.com/AwashAmityOak)
// ==/UserScript==

(function () {
    "use strict";

    const typeSizeTable = () => {
        const table = document.createElement("table");
        table.classList.add("table");
        table.classList.add("table-bordered");
        table.innerHTML = `
<thead>
    <tr>
        <th>型</th>
        <th>範囲</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>int</td>
        <td>
            <var>-2^{31}, \\ldots, 2^{31}-1</var>
            <var>(-2 \\times 10^9, \\ldots, 2 \\times 10^9)</var>
        </td>
    </tr>
    <tr>
        <td>long long</td>
        <td>
            <var>-2^{63}, \\ldots, 2^{63}-1</var>
            <var>(-9 \\times 10^{18}, \\ldots, 9 \\times 10^{18})</var>
        </td>
    </tr>
</tbody>
`;
        table.querySelectorAll("var").forEach(e=>{
            e.innerHTML = "\\(" + e.innerHTML + "\\)";
        });
        renderMathInElement(table, katexOptions);
        return table;
    };

    const timeComplexityTable = () => {
        const table = document.createElement("table");
        table.classList.add("table");
        table.classList.add("table-bordered");
        table.innerHTML = `
<thead>
    <tr>
        <th>入力サイズ</th>
        <th>時間計算量</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><var>N \\leq 10</var></td>
        <td><var>O(N!)</var></td>
    </tr>
    <tr>
        <td><var>N \\leq 20</var></td>
        <td><var>O(2^N)</var></td>
    </tr>
    <tr>
        <td><var>N \\leq 50</var></td>
        <td><var>O(N^4)</var></td>
    </tr>
    <tr>
        <td><var>N \\leq 500</var></td>
        <td><var>O(N^3)</var></td>
    </tr>
    <tr>
        <td><var>N \\leq 5000</var></td>
        <td><var>O(N^2)</var></td>
    </tr>
    <tr>
        <td><var>N \\leq 10^5</var></td>
        <td><var>O(N)</var> or <var>O(N \\log N)</var></td>
    </tr>
    <tr>
        <td><var>10^5 < N</var></td>
        <td><var>O(\\log N)</var> or <var>O(1)</var></td>
    </tr>
</tbody>
`;
        table.querySelectorAll("var").forEach(e=>{
            e.innerHTML = "\\(" + e.innerHTML + "\\)";
        });
        renderMathInElement(table, katexOptions);
        return table;
    };

    const elements = document.querySelectorAll(".part > section");
    for (const parent of elements) {
        if (parent.innerHTML.indexOf("制約") == -1) {
            continue;
        }

        const typeSizeElement = document.createElement("details");
        typeSizeElement.appendChild(
            (() => {
                const s = document.createElement("summary");
                s.innerHTML = "型のサイズ";
                return s;
            })(),
        );
        typeSizeElement.appendChild(typeSizeTable());
        parent.appendChild(typeSizeElement);

        const timeComplexityElement = document.createElement("details");
        timeComplexityElement.appendChild(
            (() => {
                const s = document.createElement("summary");
                s.innerHTML = "時間計算量";
                return s;
            })(),
        );
        timeComplexityElement.appendChild(timeComplexityTable());
        parent.appendChild(timeComplexityElement);
    }
})();
