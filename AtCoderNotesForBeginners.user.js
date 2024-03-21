// ==UserScript==
// @name         AtCoderNotesForBeginners
// @namespace    https://github.com/AwashAmityOak/
// @version      0.1.0
// @description  Show some knowledges for beginners on AtCoder.
// @author       AwashAmityOak
// @match        https://atcoder.jp/contests/*/tasks/*
// @grant        none
// @copyright    2024 AwashAmityOak (https://github.com/AwashAmityOak/)
// ==/UserScript==

(function () {
    "use strict";

    const typeSizeTable = () => {
        const table = document.createElement("table");
        table.className = "table table-bordered";
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
            <math>
                <mo>&minus;</mo>
                <msup>
                    <mn>2</mn>
                    <mn>31</mn>
                </msup>
            </math>
            <span>〜</span>
            <math>
                <msup>
                    <mn>2</mn>
                    <mn>31</mn>
                </msup>
                <mo>&minus;</mo>
                <mn>1</mn>
            </math>
            <span>&lpar;</span>
            <math>
                <mo>&minus;</mo>
                <mn>2</mn>
                <mo>&times;</mo>
                <msup>
                    <mn>10</mn>
                    <mn>9</mn>
                </msup>
            </math>
            <span>〜</span>
            <math>
                <mn>2</mn>
                <mo>&times;</mo>
                <msup>
                    <mn>10</mn>
                    <mn>9</mn>
                </msup>
            </math>
            <span>&rpar;</span>
        </td>
    </tr>
    <tr>
        <td>long long</td>
        <td>
            <math>
                <mo>&minus;</mo>
                <msup>
                    <mn>2</mn>
                    <mn>63</mn>
                </msup>
            </math>
            <span>〜</span>
            <math>
                <msup>
                    <mn>2</mn>
                    <mn>63</mn>
                </msup>
                <mo>&minus;</mo>
                <mn>1</mn>
            </math>
            <span>&lpar;</span>
            <math>
                <mo>&minus;</mo>
                <mn>9</mn>
                <mo>&times;</mo>
                <msup>
                    <mn>10</mn>
                    <mn>18</mn>
                </msup>
            </math>
            <span>〜</span>
            <math>
                <mn>9</mn>
                <mo>&times;</mo>
                <msup>
                    <mn>10</mn>
                    <mn>18</mn>
                </msup>
            </math>
            <span>&rpar;</span>
        </td>
    </tr>
</tbody>
`;
        return table;
    };

    const timeComplexityTable = () => {
        const table = document.createElement("table");
        table.className = "table table-bordered";
        table.innerHTML = `
<thead>
    <tr>
        <th>入力サイズ</th>
        <th>時間計算量</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            <math>
                <mi>N</mi>
                <mo>&le;</mo>
                <mn>10</mn>
            </math>
        </td>
        <td>
            <math>
                <mi>O</mi>
                <mo>&ApplyFunction;</mo>
                <mrow>
                    <mo>&lpar;</mo>
                    <mi>N</mi>
                    <mo>!</mo>
                    <mo>&rpar;</mo>
                </mrow>
            </math>
        </td>
    </tr>
    <tr>
        <td>
            <math>
                <mi>N</mi>
                <mo>&le;</mo>
                <mn>20</mn>
            </math>
        </td>
        <td>
            <math>
                <mi>O</mi>
                <mo>&ApplyFunction;</mo>
                <mrow>
                    <mo>&lpar;</mo>
                    <msup>
                        <mn>2</mn>
                        <mi>N</mi>
                    </msup>
                    <mo>&rpar;</mo>
                </mrow>
            </math>
        </td>
    </tr>
    <tr>
        <td>
            <math>
                <mi>N</mi>
                <mo>&le;</mo>
                <mn>50</mn>
            </math>
        </td>
        <td>
            <math>
                <mi>O</mi>
                <mo>&ApplyFunction;</mo>
                <mrow>
                    <mo>&lpar;</mo>
                    <msup>
                        <mi>N</mi>
                        <mn>4</mn>
                    </msup>
                    <mo>&rpar;</mo>
                </mrow>
            </math>
        </td>
    </tr>
    <tr>
        <td>
            <math>
                <mi>N</mi>
                <mo>&le;</mo>
                <mn>500</mn>
            </math>
        </td>
        <td>
            <math>
                <mi>O</mi>
                <mo>&ApplyFunction;</mo>
                <mrow>
                    <mo>&lpar;</mo>
                    <msup>
                        <mi>N</mi>
                        <mn>3</mn>
                    </msup>
                    <mo>&rpar;</mo>
                </mrow>
            </math>
        </td>
    </tr>
    <tr>
        <td>
            <math>
                <mi>N</mi>
                <mo>&le;</mo>
                <mn>5000</mn>
            </math>
        </td>
        <td>
            <math>
                <mi>O</mi>
                <mo>&ApplyFunction;</mo>
                <mrow>
                    <mo>&lpar;</mo>
                    <msup>
                        <mi>N</mi>
                        <mn>2</mn>
                    </msup>
                    <mo>&rpar;</mo>
                </mrow>
            </math>
        </td>
    </tr>
    <tr>
        <td>
            <math>
                <mi>N</mi>
                <mo>&le;</mo>
                <msup>
                    <mn>10</mn>
                    <mn>5</mn>
                </msup>
            </math>
        </td>
        <td>
            <math>
                <mrow>
                    <mi>O</mi>
                    <mo>&ApplyFunction;</mo>
                    <mrow>
                        <mo>&lpar;</mo>
                        <mi>N</mi><mo>&rpar;</mo>
                    </mrow>
                </mrow>
                <mo>or</mo>
                <mrow>
                    <mi>O</mi>
                    <mo>&ApplyFunction;</mo>
                    <mrow>
                        <mo>&lpar;</mo>
                        <mi>N</mi>
                        <mo>&InvisibleTimes;</mo>
                        <mi>log</mi>
                        <mo>&ApplyFunction;</mo>
                        <mrow>
                            <mi>N</mi>
                        </mrow>
                        <mo>&rpar;</mo>
                    </mrow>
                </mrow>
            </math>
        </td>
    </tr>
    <tr>
        <td>
            <math>
                <msup>
                    <mn>10</mn>
                    <mn>5</mn>
                </msup>
                <mo>&lt;</mo>
                <mi>N</mi>
            </math>
        </td>
        <td>
            <math>
                <mrow>
                    <mi>O</mi>
                    <mo>&ApplyFunction;</mo>
                    <mrow>
                        <mo>&lpar;</mo>
                        <mi>log</mi>
                        <mo>&ApplyFunction;</mo>
                        <mrow>
                            <mi>N</mi>
                        </mrow>
                        <mo>&rpar;</mo>
                    </mrow>
                </mrow>
                <mo>or</mo>
                <mrow>
                    <mi>O</mi>
                    <mo>&ApplyFunction;</mo>
                    <mrow>
                        <mo>&lpar;</mo>
                        <mn>1</mn>
                        <mo>&rpar;</mo>
                    </mrow>
                </mrow>
            </math>
        </td>
    </tr>
</tbody>
`;
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
