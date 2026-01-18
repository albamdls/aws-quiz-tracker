// src/data/globalTests.js
import exam1 from "./global_tests/global_test_1.js";
import exam2 from "./global_tests/global_test_2.js";
import exam3 from "./global_tests/global_test_3.js";
import exam4 from "./global_tests/global_test_4.js";
import exam5 from "./global_tests/global_test_5.js";
import exam6 from "./global_tests/global_test_6.js";
import exam7 from "./global_tests/global_test_7.js";
import exam8 from "./global_tests/global_test_8.js";
import exam9 from "./global_tests/global_test_9.js";
import exam10 from "./global_tests/global_test_10.js";
import exam11 from "./global_tests/global_test_11.js";
import exam12 from "./global_tests/global_test_12.js";
import exam13 from "./global_tests/global_test_13.js";
import exam14 from "./global_tests/global_test_14.js";
import exam15 from "./global_tests/global_test_15.js";
import exam16 from "./global_tests/global_test_16.js";
import exam17 from "./global_tests/global_test_17.js";
import exam18 from "./global_tests/global_test_18.js";
import exam19 from "./global_tests/global_test_19.js";
import exam20 from "./global_tests/global_test_20.js";
import exam21 from "./global_tests/global_test_21.js";
import exam22 from "./global_tests/global_test_22.js";
import exam23 from "./global_tests/global_test_23.js";

const RAW = [
  exam1, exam2, exam3, exam4, exam5, exam6, exam7, exam8, exam9, exam10, exam11, exam12,
  exam13, exam14, exam15, exam16, exam17, exam18, exam19, exam20, exam21, exam22, exam23,
];

export const EXAMS = RAW.flat().filter(Boolean);
