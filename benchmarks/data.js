window.BENCHMARK_DATA = {
  "lastUpdate": 1706230779084,
  "repoUrl": "https://github.com/open-telemetry/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python SDK Benchmarks - Python 3.11 - SDK": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48fdb6389a78d7c357565268a68d1705706f453f",
          "message": "Rename benchmarks branch to gh-pages (#3581)\n\nFixes #3580",
          "timestamp": "2023-12-14T20:33:34-06:00",
          "tree_id": "bbcc7db43bfb09d8be31cc43593ce6278e8ea718",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/48fdb6389a78d7c357565268a68d1705706f453f"
        },
        "date": 1702628043216,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 919125.7789501001,
            "unit": "iter/sec",
            "range": "stddev: 8.963932919490788e-8",
            "extra": "mean: 1.0879903740076586 usec\nrounds: 30806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 866171.2563752028,
            "unit": "iter/sec",
            "range": "stddev: 3.360539114209923e-7",
            "extra": "mean: 1.15450610100461 usec\nrounds: 97154"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 767111.585345143,
            "unit": "iter/sec",
            "range": "stddev: 2.552029932275722e-7",
            "extra": "mean: 1.3035913146195994 usec\nrounds: 112035"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 678826.2398825133,
            "unit": "iter/sec",
            "range": "stddev: 2.1136217014928756e-7",
            "extra": "mean: 1.473131033021165 usec\nrounds: 78755"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 562677.4826108214,
            "unit": "iter/sec",
            "range": "stddev: 2.518112170502371e-7",
            "extra": "mean: 1.77721702201411 usec\nrounds: 90642"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 919666.2959146053,
            "unit": "iter/sec",
            "range": "stddev: 1.7469742198275074e-7",
            "extra": "mean: 1.0873509276595845 usec\nrounds: 53090"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 870348.3592292825,
            "unit": "iter/sec",
            "range": "stddev: 1.711390158127123e-7",
            "extra": "mean: 1.148965226849543 usec\nrounds: 137466"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 769770.9552563041,
            "unit": "iter/sec",
            "range": "stddev: 2.476861853944945e-7",
            "extra": "mean: 1.299087726253634 usec\nrounds: 134673"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 673820.8875513654,
            "unit": "iter/sec",
            "range": "stddev: 3.095565818301746e-7",
            "extra": "mean: 1.4840739111456678 usec\nrounds: 124956"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 561086.0291710411,
            "unit": "iter/sec",
            "range": "stddev: 3.556652894969962e-7",
            "extra": "mean: 1.7822578856176807 usec\nrounds: 84222"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 922689.0368297382,
            "unit": "iter/sec",
            "range": "stddev: 3.541918042448067e-7",
            "extra": "mean: 1.0837887523145326 usec\nrounds: 32110"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 879613.799238098,
            "unit": "iter/sec",
            "range": "stddev: 2.743127584021781e-7",
            "extra": "mean: 1.1368625649872455 usec\nrounds: 117272"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 779263.9971320797,
            "unit": "iter/sec",
            "range": "stddev: 2.4385131154992634e-7",
            "extra": "mean: 1.2832621597819143 usec\nrounds: 117645"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 684313.1006268384,
            "unit": "iter/sec",
            "range": "stddev: 2.2714819341457625e-7",
            "extra": "mean: 1.4613193859418867 usec\nrounds: 112800"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 559370.3746652022,
            "unit": "iter/sec",
            "range": "stddev: 2.954817015959684e-7",
            "extra": "mean: 1.7877242794606811 usec\nrounds: 115556"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 747351.1299360996,
            "unit": "iter/sec",
            "range": "stddev: 1.1132106793108436e-7",
            "extra": "mean: 1.338059126351361 usec\nrounds: 3834"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 745559.9194552418,
            "unit": "iter/sec",
            "range": "stddev: 2.473517316198177e-7",
            "extra": "mean: 1.3412738183815862 usec\nrounds: 198805"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 742225.8500105082,
            "unit": "iter/sec",
            "range": "stddev: 1.9785063942307618e-7",
            "extra": "mean: 1.3472988039770406 usec\nrounds: 159404"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 796165.5373182931,
            "unit": "iter/sec",
            "range": "stddev: 1.0563073921687926e-7",
            "extra": "mean: 1.256020203246021 usec\nrounds: 176487"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 794434.4275364181,
            "unit": "iter/sec",
            "range": "stddev: 1.1516120695892894e-7",
            "extra": "mean: 1.2587571300265161 usec\nrounds: 172656"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 737451.5779110143,
            "unit": "iter/sec",
            "range": "stddev: 2.545714008506206e-7",
            "extra": "mean: 1.356021235770773 usec\nrounds: 19623"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 792052.4711555769,
            "unit": "iter/sec",
            "range": "stddev: 1.082930509297308e-7",
            "extra": "mean: 1.2625426173357364 usec\nrounds: 185833"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 746007.1395119943,
            "unit": "iter/sec",
            "range": "stddev: 2.3346138161175505e-7",
            "extra": "mean: 1.3404697449064051 usec\nrounds: 180461"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 748729.2809081713,
            "unit": "iter/sec",
            "range": "stddev: 2.571548644077778e-7",
            "extra": "mean: 1.3355962234935568 usec\nrounds: 190482"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 794174.2094031352,
            "unit": "iter/sec",
            "range": "stddev: 1.1371529190980426e-7",
            "extra": "mean: 1.2591695728215022 usec\nrounds: 182145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 725520.3123605299,
            "unit": "iter/sec",
            "range": "stddev: 1.6657516286637725e-7",
            "extra": "mean: 1.3783211620174103 usec\nrounds: 29187"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 770948.2963728677,
            "unit": "iter/sec",
            "range": "stddev: 1.1249219846066901e-7",
            "extra": "mean: 1.297103845620734 usec\nrounds: 173689"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 771659.964464329,
            "unit": "iter/sec",
            "range": "stddev: 1.0792565280216183e-7",
            "extra": "mean: 1.2959075837168514 usec\nrounds: 176516"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 773619.7946507485,
            "unit": "iter/sec",
            "range": "stddev: 1.0863703105812781e-7",
            "extra": "mean: 1.2926246289386263 usec\nrounds: 173942"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 723549.583472139,
            "unit": "iter/sec",
            "range": "stddev: 2.3658190943851145e-7",
            "extra": "mean: 1.3820752894379988 usec\nrounds: 198547"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 720717.3906254729,
            "unit": "iter/sec",
            "range": "stddev: 2.499081775138413e-7",
            "extra": "mean: 1.3875064109833015 usec\nrounds: 29166"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 720605.6629638305,
            "unit": "iter/sec",
            "range": "stddev: 2.2854935390789634e-7",
            "extra": "mean: 1.3877215395269424 usec\nrounds: 198108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 770908.6440664794,
            "unit": "iter/sec",
            "range": "stddev: 1.1127458966978588e-7",
            "extra": "mean: 1.297170563200696 usec\nrounds: 179586"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 776138.9971991688,
            "unit": "iter/sec",
            "range": "stddev: 1.0976382706871773e-7",
            "extra": "mean: 1.2884290102786644 usec\nrounds: 179166"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 726078.7546180703,
            "unit": "iter/sec",
            "range": "stddev: 2.484948283955935e-7",
            "extra": "mean: 1.3772610665712384 usec\nrounds: 194943"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 698478.4011960655,
            "unit": "iter/sec",
            "range": "stddev: 3.018679547085174e-7",
            "extra": "mean: 1.431683496995201 usec\nrounds: 26481"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 696636.6460634929,
            "unit": "iter/sec",
            "range": "stddev: 2.3764951840852628e-7",
            "extra": "mean: 1.4354685554524476 usec\nrounds: 191160"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 689228.0590736185,
            "unit": "iter/sec",
            "range": "stddev: 2.185035319096884e-7",
            "extra": "mean: 1.4508985622902317 usec\nrounds: 199952"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 682303.9362160373,
            "unit": "iter/sec",
            "range": "stddev: 2.5268452712937975e-7",
            "extra": "mean: 1.4656224988908328 usec\nrounds: 193433"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 681694.5013493592,
            "unit": "iter/sec",
            "range": "stddev: 2.4945746354848175e-7",
            "extra": "mean: 1.4669327653671562 usec\nrounds: 169414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 66727.45592804764,
            "unit": "iter/sec",
            "range": "stddev: 0.000007420231283133922",
            "extra": "mean: 14.986334876580672 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59365.31338844127,
            "unit": "iter/sec",
            "range": "stddev: 9.421017812330877e-7",
            "extra": "mean: 16.84485338191957 usec\nrounds: 23564"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48fdb6389a78d7c357565268a68d1705706f453f",
          "message": "Rename benchmarks branch to gh-pages (#3581)\n\nFixes #3580",
          "timestamp": "2023-12-14T20:33:34-06:00",
          "tree_id": "bbcc7db43bfb09d8be31cc43593ce6278e8ea718",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/48fdb6389a78d7c357565268a68d1705706f453f"
        },
        "date": 1702628099034,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 914534.7312585397,
            "unit": "iter/sec",
            "range": "stddev: 1.1270452849354733e-7",
            "extra": "mean: 1.0934521848326602 usec\nrounds: 32586"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 864052.3903774832,
            "unit": "iter/sec",
            "range": "stddev: 8.546812213871608e-8",
            "extra": "mean: 1.1573372299370928 usec\nrounds: 90819"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 761308.7564849785,
            "unit": "iter/sec",
            "range": "stddev: 1.3596579167115952e-7",
            "extra": "mean: 1.3135275162433142 usec\nrounds: 126012"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 674780.8249785887,
            "unit": "iter/sec",
            "range": "stddev: 1.1661564999311933e-7",
            "extra": "mean: 1.4819626802995338 usec\nrounds: 115494"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 557321.5960060655,
            "unit": "iter/sec",
            "range": "stddev: 1.4991253600321297e-7",
            "extra": "mean: 1.7942961607199532 usec\nrounds: 111628"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 910859.0629007356,
            "unit": "iter/sec",
            "range": "stddev: 7.865002129585527e-8",
            "extra": "mean: 1.097864687008092 usec\nrounds: 51146"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 858930.9927815739,
            "unit": "iter/sec",
            "range": "stddev: 1.4259343754750532e-7",
            "extra": "mean: 1.1642378822093569 usec\nrounds: 145258"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 779896.0115615657,
            "unit": "iter/sec",
            "range": "stddev: 1.6928876395082407e-7",
            "extra": "mean: 1.282222226008985 usec\nrounds: 124104"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 672149.6392529444,
            "unit": "iter/sec",
            "range": "stddev: 1.0159950706515345e-7",
            "extra": "mean: 1.4877639465989188 usec\nrounds: 49617"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 564166.4704047614,
            "unit": "iter/sec",
            "range": "stddev: 1.6222781776513107e-7",
            "extra": "mean: 1.7725264659605697 usec\nrounds: 118685"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 926062.2100203916,
            "unit": "iter/sec",
            "range": "stddev: 7.712626534427721e-8",
            "extra": "mean: 1.0798410616258494 usec\nrounds: 25179"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 880042.8530710989,
            "unit": "iter/sec",
            "range": "stddev: 1.7188413823432172e-7",
            "extra": "mean: 1.1363083019313036 usec\nrounds: 48492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 774632.1206254049,
            "unit": "iter/sec",
            "range": "stddev: 3.476839558201053e-7",
            "extra": "mean: 1.290935365800017 usec\nrounds: 126860"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 679741.4626742263,
            "unit": "iter/sec",
            "range": "stddev: 1.3977711367002874e-7",
            "extra": "mean: 1.4711475684678974 usec\nrounds: 112611"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 560431.0746659256,
            "unit": "iter/sec",
            "range": "stddev: 1.864216601025188e-7",
            "extra": "mean: 1.784340742697222 usec\nrounds: 122770"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 752937.0015770134,
            "unit": "iter/sec",
            "range": "stddev: 1.5148459533567995e-7",
            "extra": "mean: 1.328132364202473 usec\nrounds: 3985"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 748368.5073086824,
            "unit": "iter/sec",
            "range": "stddev: 1.78901080051197e-7",
            "extra": "mean: 1.3362400879163747 usec\nrounds: 180522"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 741997.8063398638,
            "unit": "iter/sec",
            "range": "stddev: 2.7695012813972453e-7",
            "extra": "mean: 1.3477128792776527 usec\nrounds: 156022"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 805447.9002434706,
            "unit": "iter/sec",
            "range": "stddev: 7.40235212877754e-8",
            "extra": "mean: 1.241545231786836 usec\nrounds: 182052"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 803271.7818976644,
            "unit": "iter/sec",
            "range": "stddev: 8.62684285899718e-8",
            "extra": "mean: 1.2449086629653305 usec\nrounds: 187227"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 734621.2431827871,
            "unit": "iter/sec",
            "range": "stddev: 7.63558221705793e-7",
            "extra": "mean: 1.3612456885502586 usec\nrounds: 20213"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 797356.9606610265,
            "unit": "iter/sec",
            "range": "stddev: 1.0116884351975274e-7",
            "extra": "mean: 1.2541434380543663 usec\nrounds: 187292"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 796386.5407922904,
            "unit": "iter/sec",
            "range": "stddev: 9.123947390869153e-8",
            "extra": "mean: 1.2556716478472167 usec\nrounds: 189741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 793398.1494794333,
            "unit": "iter/sec",
            "range": "stddev: 9.801316521611751e-8",
            "extra": "mean: 1.2604012256092643 usec\nrounds: 182021"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 801066.9017777751,
            "unit": "iter/sec",
            "range": "stddev: 1.0337396732053723e-7",
            "extra": "mean: 1.2483351862132124 usec\nrounds: 186414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 732744.2461842541,
            "unit": "iter/sec",
            "range": "stddev: 1.415993881433974e-7",
            "extra": "mean: 1.3647326542753124 usec\nrounds: 29331"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 731715.1335620825,
            "unit": "iter/sec",
            "range": "stddev: 1.5709926475976624e-7",
            "extra": "mean: 1.3666520673583347 usec\nrounds: 196909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 787579.0228127004,
            "unit": "iter/sec",
            "range": "stddev: 9.717123658903031e-8",
            "extra": "mean: 1.2697138585899297 usec\nrounds: 182362"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 788881.0130716665,
            "unit": "iter/sec",
            "range": "stddev: 9.360788151980771e-8",
            "extra": "mean: 1.267618288981629 usec\nrounds: 185898"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 785532.557949987,
            "unit": "iter/sec",
            "range": "stddev: 9.39930708399454e-8",
            "extra": "mean: 1.273021709768098 usec\nrounds: 186998"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 733727.0911390329,
            "unit": "iter/sec",
            "range": "stddev: 1.1502981571529203e-7",
            "extra": "mean: 1.362904562304776 usec\nrounds: 27704"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 788707.8045534155,
            "unit": "iter/sec",
            "range": "stddev: 1.0113338676892568e-7",
            "extra": "mean: 1.2678966712726052 usec\nrounds: 186706"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 786170.3684120289,
            "unit": "iter/sec",
            "range": "stddev: 9.633345785417816e-8",
            "extra": "mean: 1.2719889227316996 usec\nrounds: 183797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 787354.8352420579,
            "unit": "iter/sec",
            "range": "stddev: 1.038557743004313e-7",
            "extra": "mean: 1.2700753907132203 usec\nrounds: 183233"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 785749.3036353132,
            "unit": "iter/sec",
            "range": "stddev: 9.951380770357785e-8",
            "extra": "mean: 1.272670552011238 usec\nrounds: 181315"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 702034.7010578095,
            "unit": "iter/sec",
            "range": "stddev: 1.5831219165612887e-7",
            "extra": "mean: 1.4244310124459991 usec\nrounds: 25289"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 702972.9199753063,
            "unit": "iter/sec",
            "range": "stddev: 1.656699058252965e-7",
            "extra": "mean: 1.4225299034778291 usec\nrounds: 188013"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 730412.8132781805,
            "unit": "iter/sec",
            "range": "stddev: 1.104800999248017e-7",
            "extra": "mean: 1.3690887972130168 usec\nrounds: 113841"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 695306.13278008,
            "unit": "iter/sec",
            "range": "stddev: 1.7800481340548361e-7",
            "extra": "mean: 1.4382154174329604 usec\nrounds: 199915"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 735978.4984264297,
            "unit": "iter/sec",
            "range": "stddev: 9.046722847968993e-8",
            "extra": "mean: 1.3587353463967569 usec\nrounds: 166317"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72891.64451978673,
            "unit": "iter/sec",
            "range": "stddev: 0.000004170946460692756",
            "extra": "mean: 13.718993536063602 usec\nrounds: 35"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58711.63452041671,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011305844337584604",
            "extra": "mean: 17.032399253886457 usec\nrounds: 17920"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "107717825+opentelemetrybot@users.noreply.github.com",
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bede4d259aa497bd2d62d1dd249c0b43dc4067a2",
          "message": "Update version to 1.23.0.dev/0.44b0.dev (#3582)\n\n* Update version to 1.23.0.dev/0.44b0.dev\r\n\r\n* Update SHA\r\n\r\n---------\r\n\r\nCo-authored-by: Diego Hurtado <ocelotl@users.noreply.github.com>",
          "timestamp": "2023-12-15T16:54:07-06:00",
          "tree_id": "c9bd56dc2412b8efcec819b34a70a5da26f7e702",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bede4d259aa497bd2d62d1dd249c0b43dc4067a2"
        },
        "date": 1702681333220,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 905308.1331150084,
            "unit": "iter/sec",
            "range": "stddev: 7.556850574762745e-8",
            "extra": "mean: 1.1045962843161183 usec\nrounds: 30510"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 856950.8506421865,
            "unit": "iter/sec",
            "range": "stddev: 1.5161336459879368e-7",
            "extra": "mean: 1.1669280674038827 usec\nrounds: 92652"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 770199.6988840349,
            "unit": "iter/sec",
            "range": "stddev: 1.3609628784708595e-7",
            "extra": "mean: 1.2983645688889902 usec\nrounds: 114131"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 658741.731199525,
            "unit": "iter/sec",
            "range": "stddev: 1.4791268163190647e-7",
            "extra": "mean: 1.518045620366371 usec\nrounds: 114582"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 565109.7944386901,
            "unit": "iter/sec",
            "range": "stddev: 1.4878302430341927e-7",
            "extra": "mean: 1.769567630646494 usec\nrounds: 101488"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 904906.8582893085,
            "unit": "iter/sec",
            "range": "stddev: 1.399887154910223e-7",
            "extra": "mean: 1.1050861100671303 usec\nrounds: 54091"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 851206.0992502259,
            "unit": "iter/sec",
            "range": "stddev: 1.3219748459348296e-7",
            "extra": "mean: 1.174803612052166 usec\nrounds: 129868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 764983.5041132035,
            "unit": "iter/sec",
            "range": "stddev: 1.5139796843739797e-7",
            "extra": "mean: 1.3072177303473178 usec\nrounds: 120389"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 672441.0715164668,
            "unit": "iter/sec",
            "range": "stddev: 1.574051768804397e-7",
            "extra": "mean: 1.4871191578837282 usec\nrounds: 132807"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 563617.020189557,
            "unit": "iter/sec",
            "range": "stddev: 1.6179391385845005e-7",
            "extra": "mean: 1.7742544390580641 usec\nrounds: 101450"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 906468.5610555597,
            "unit": "iter/sec",
            "range": "stddev: 1.1413817640303006e-7",
            "extra": "mean: 1.1031822205014208 usec\nrounds: 32305"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 860080.632323997,
            "unit": "iter/sec",
            "range": "stddev: 1.455004789814918e-7",
            "extra": "mean: 1.1626816863646043 usec\nrounds: 132300"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 773443.3011584639,
            "unit": "iter/sec",
            "range": "stddev: 1.3230722992287964e-7",
            "extra": "mean: 1.2929195954017563 usec\nrounds: 118830"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 667571.6608740188,
            "unit": "iter/sec",
            "range": "stddev: 1.5983302579549585e-7",
            "extra": "mean: 1.4979665234601918 usec\nrounds: 118633"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 570811.099189765,
            "unit": "iter/sec",
            "range": "stddev: 1.9008839639820338e-7",
            "extra": "mean: 1.7518930543212017 usec\nrounds: 120863"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 754987.3093988054,
            "unit": "iter/sec",
            "range": "stddev: 1.1062843879945223e-7",
            "extra": "mean: 1.3245255748686657 usec\nrounds: 3884"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 808416.9853264663,
            "unit": "iter/sec",
            "range": "stddev: 7.093354199779901e-8",
            "extra": "mean: 1.236985390152541 usec\nrounds: 188211"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 753169.1830183465,
            "unit": "iter/sec",
            "range": "stddev: 1.7389970252950374e-7",
            "extra": "mean: 1.3277229373518338 usec\nrounds: 165676"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 805198.7821379004,
            "unit": "iter/sec",
            "range": "stddev: 7.271449959700598e-8",
            "extra": "mean: 1.2419293498493365 usec\nrounds: 187325"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 800147.9443816785,
            "unit": "iter/sec",
            "range": "stddev: 6.858447445622628e-8",
            "extra": "mean: 1.249768879644825 usec\nrounds: 188277"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 747797.3921633464,
            "unit": "iter/sec",
            "range": "stddev: 1.3263455598197535e-7",
            "extra": "mean: 1.3372606142782097 usec\nrounds: 19105"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 795250.6077206717,
            "unit": "iter/sec",
            "range": "stddev: 6.701491241031224e-8",
            "extra": "mean: 1.2574652446556138 usec\nrounds: 185416"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 744411.5272373363,
            "unit": "iter/sec",
            "range": "stddev: 1.3615492391186128e-7",
            "extra": "mean: 1.3433429808794135 usec\nrounds: 189073"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 808098.1750487215,
            "unit": "iter/sec",
            "range": "stddev: 6.570040913883513e-8",
            "extra": "mean: 1.2374734046883702 usec\nrounds: 189073"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 808838.90626489,
            "unit": "iter/sec",
            "range": "stddev: 6.484894470733388e-8",
            "extra": "mean: 1.2363401318290517 usec\nrounds: 183860"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 744253.4164179937,
            "unit": "iter/sec",
            "range": "stddev: 1.1653613158217852e-7",
            "extra": "mean: 1.3436283635927198 usec\nrounds: 26580"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 782436.3825024822,
            "unit": "iter/sec",
            "range": "stddev: 8.90224697765778e-8",
            "extra": "mean: 1.2780591781809527 usec\nrounds: 182455"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 792029.120145708,
            "unit": "iter/sec",
            "range": "stddev: 6.274657721347842e-8",
            "extra": "mean: 1.2625798402665196 usec\nrounds: 181591"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 796077.6438653194,
            "unit": "iter/sec",
            "range": "stddev: 6.651646853261294e-8",
            "extra": "mean: 1.2561588781020714 usec\nrounds: 182796"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 739044.5123107713,
            "unit": "iter/sec",
            "range": "stddev: 1.3828124320878338e-7",
            "extra": "mean: 1.3530984715295415 usec\nrounds: 194943"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 739397.9956322442,
            "unit": "iter/sec",
            "range": "stddev: 1.3120984420018873e-7",
            "extra": "mean: 1.3524515969845448 usec\nrounds: 27545"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 786250.6829079884,
            "unit": "iter/sec",
            "range": "stddev: 7.069300617419416e-8",
            "extra": "mean: 1.2718589906993134 usec\nrounds: 180613"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 782876.3930886254,
            "unit": "iter/sec",
            "range": "stddev: 6.613020795024621e-8",
            "extra": "mean: 1.2773408533303356 usec\nrounds: 188409"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 792386.4718647426,
            "unit": "iter/sec",
            "range": "stddev: 6.01891157911864e-8",
            "extra": "mean: 1.2620104399898138 usec\nrounds: 184905"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 737083.2467720362,
            "unit": "iter/sec",
            "range": "stddev: 1.7368119981817074e-7",
            "extra": "mean: 1.3566988591578697 usec\nrounds: 193154"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 703976.016508479,
            "unit": "iter/sec",
            "range": "stddev: 1.39140479449587e-7",
            "extra": "mean: 1.4205029383809349 usec\nrounds: 26273"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 735228.5087388803,
            "unit": "iter/sec",
            "range": "stddev: 1.5343286193549984e-7",
            "extra": "mean: 1.3601213610653862 usec\nrounds: 170897"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 704386.6018471706,
            "unit": "iter/sec",
            "range": "stddev: 1.5390460162933538e-7",
            "extra": "mean: 1.4196749304680387 usec\nrounds: 147655"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 722299.0477029216,
            "unit": "iter/sec",
            "range": "stddev: 7.28986845155812e-8",
            "extra": "mean: 1.384468113560764 usec\nrounds: 165014"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 735112.6376136775,
            "unit": "iter/sec",
            "range": "stddev: 7.555833415889221e-8",
            "extra": "mean: 1.3603357483367442 usec\nrounds: 163556"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72377.52183980968,
            "unit": "iter/sec",
            "range": "stddev: 0.000003881946948597333",
            "extra": "mean: 13.816444312824924 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59717.4152689886,
            "unit": "iter/sec",
            "range": "stddev: 5.619429924719815e-7",
            "extra": "mean: 16.745533869737034 usec\nrounds: 26126"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "107717825+opentelemetrybot@users.noreply.github.com",
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bede4d259aa497bd2d62d1dd249c0b43dc4067a2",
          "message": "Update version to 1.23.0.dev/0.44b0.dev (#3582)\n\n* Update version to 1.23.0.dev/0.44b0.dev\r\n\r\n* Update SHA\r\n\r\n---------\r\n\r\nCo-authored-by: Diego Hurtado <ocelotl@users.noreply.github.com>",
          "timestamp": "2023-12-15T16:54:07-06:00",
          "tree_id": "c9bd56dc2412b8efcec819b34a70a5da26f7e702",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bede4d259aa497bd2d62d1dd249c0b43dc4067a2"
        },
        "date": 1702681386666,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 896122.6769966929,
            "unit": "iter/sec",
            "range": "stddev: 2.059917603507713e-7",
            "extra": "mean: 1.115918641130081 usec\nrounds: 31959"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 851229.0914252552,
            "unit": "iter/sec",
            "range": "stddev: 2.3571817585237875e-7",
            "extra": "mean: 1.1747718799479119 usec\nrounds: 103694"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 761666.7289679248,
            "unit": "iter/sec",
            "range": "stddev: 2.1426909954893763e-7",
            "extra": "mean: 1.3129101770731433 usec\nrounds: 113564"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 675801.7213784055,
            "unit": "iter/sec",
            "range": "stddev: 2.2012831650451318e-7",
            "extra": "mean: 1.4797239609871673 usec\nrounds: 112035"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 564233.7904226237,
            "unit": "iter/sec",
            "range": "stddev: 2.4231500187578976e-7",
            "extra": "mean: 1.7723149817932342 usec\nrounds: 108012"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 909990.3378076997,
            "unit": "iter/sec",
            "range": "stddev: 1.8657524839347803e-7",
            "extra": "mean: 1.0989127669301926 usec\nrounds: 50349"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 864696.4841296583,
            "unit": "iter/sec",
            "range": "stddev: 2.247629972338205e-7",
            "extra": "mean: 1.1564751544081142 usec\nrounds: 140986"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 767791.9338764257,
            "unit": "iter/sec",
            "range": "stddev: 1.8264639407174004e-7",
            "extra": "mean: 1.3024361886054243 usec\nrounds: 125864"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 675937.2721481097,
            "unit": "iter/sec",
            "range": "stddev: 1.8374092319056255e-7",
            "extra": "mean: 1.47942722084555 usec\nrounds: 132284"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 561015.7915432283,
            "unit": "iter/sec",
            "range": "stddev: 2.624472870948447e-7",
            "extra": "mean: 1.7824810193831169 usec\nrounds: 119041"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 928058.9350179463,
            "unit": "iter/sec",
            "range": "stddev: 1.4963680699679318e-7",
            "extra": "mean: 1.0775177763690864 usec\nrounds: 35315"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 860875.2427354126,
            "unit": "iter/sec",
            "range": "stddev: 1.9432709932376837e-7",
            "extra": "mean: 1.161608500695782 usec\nrounds: 120999"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 769877.7316553034,
            "unit": "iter/sec",
            "range": "stddev: 2.7425042879755667e-7",
            "extra": "mean: 1.298907552306928 usec\nrounds: 133170"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 680333.3660719382,
            "unit": "iter/sec",
            "range": "stddev: 2.0196361987297393e-7",
            "extra": "mean: 1.469867641173813 usec\nrounds: 120335"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 561391.1226588144,
            "unit": "iter/sec",
            "range": "stddev: 2.863626324545245e-7",
            "extra": "mean: 1.781289300165422 usec\nrounds: 122350"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 728686.9304325365,
            "unit": "iter/sec",
            "range": "stddev: 1.1575625633501812e-7",
            "extra": "mean: 1.372331461202984 usec\nrounds: 3857"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 778349.5280853501,
            "unit": "iter/sec",
            "range": "stddev: 1.1327215771464404e-7",
            "extra": "mean: 1.2847698417186486 usec\nrounds: 180370"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 735815.2909390612,
            "unit": "iter/sec",
            "range": "stddev: 2.2502196747247837e-7",
            "extra": "mean: 1.3590367206473535 usec\nrounds: 151402"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 778228.1145528384,
            "unit": "iter/sec",
            "range": "stddev: 1.1175021753937462e-7",
            "extra": "mean: 1.2849702822347782 usec\nrounds: 182672"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 781312.8907440731,
            "unit": "iter/sec",
            "range": "stddev: 1.0890024001496903e-7",
            "extra": "mean: 1.2798969680989944 usec\nrounds: 188211"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 729877.0965991848,
            "unit": "iter/sec",
            "range": "stddev: 2.3166938695863272e-7",
            "extra": "mean: 1.370093683798869 usec\nrounds: 19962"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 790945.8523353825,
            "unit": "iter/sec",
            "range": "stddev: 1.1636028302170423e-7",
            "extra": "mean: 1.2643090510524264 usec\nrounds: 181929"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 786864.3217273889,
            "unit": "iter/sec",
            "range": "stddev: 1.199741832567395e-7",
            "extra": "mean: 1.2708671271366303 usec\nrounds: 186414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 777795.3310197174,
            "unit": "iter/sec",
            "range": "stddev: 1.217446782977748e-7",
            "extra": "mean: 1.285685269785516 usec\nrounds: 188046"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 729317.2027699009,
            "unit": "iter/sec",
            "range": "stddev: 2.710487062301733e-7",
            "extra": "mean: 1.3711454991080188 usec\nrounds: 196477"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 722190.9340590137,
            "unit": "iter/sec",
            "range": "stddev: 1.7188535862596292e-7",
            "extra": "mean: 1.3846753716217173 usec\nrounds: 26529"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 767302.4072341302,
            "unit": "iter/sec",
            "range": "stddev: 1.254725144943999e-7",
            "extra": "mean: 1.3032671220264604 usec\nrounds: 181652"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 725008.4736724846,
            "unit": "iter/sec",
            "range": "stddev: 2.437888070027492e-7",
            "extra": "mean: 1.3792942238792925 usec\nrounds: 193189"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 776343.1595076551,
            "unit": "iter/sec",
            "range": "stddev: 1.1340362582970958e-7",
            "extra": "mean: 1.288090179907278 usec\nrounds: 180431"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 775437.4655792306,
            "unit": "iter/sec",
            "range": "stddev: 1.150323841377083e-7",
            "extra": "mean: 1.289594640946356 usec\nrounds: 179766"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 715831.4281672441,
            "unit": "iter/sec",
            "range": "stddev: 3.0911872588503337e-7",
            "extra": "mean: 1.3969769426865173 usec\nrounds: 27862"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 762651.6109392435,
            "unit": "iter/sec",
            "range": "stddev: 1.1050467109884719e-7",
            "extra": "mean: 1.3112146957487578 usec\nrounds: 177420"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 759072.521035945,
            "unit": "iter/sec",
            "range": "stddev: 1.1067530787731615e-7",
            "extra": "mean: 1.3173971818071468 usec\nrounds: 177508"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 718963.8911054659,
            "unit": "iter/sec",
            "range": "stddev: 2.555451838633065e-7",
            "extra": "mean: 1.3908904360445946 usec\nrounds: 178482"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 763898.3506928346,
            "unit": "iter/sec",
            "range": "stddev: 1.1721320152722999e-7",
            "extra": "mean: 1.3090746944184755 usec\nrounds: 182300"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 683000.8812740035,
            "unit": "iter/sec",
            "range": "stddev: 2.626610800664765e-7",
            "extra": "mean: 1.4641269541771265 usec\nrounds: 25258"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 691713.6329180668,
            "unit": "iter/sec",
            "range": "stddev: 2.2922958281589828e-7",
            "extra": "mean: 1.4456849661635187 usec\nrounds: 192738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 689356.2590487639,
            "unit": "iter/sec",
            "range": "stddev: 2.425698180713664e-7",
            "extra": "mean: 1.450628737860291 usec\nrounds: 189842"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 688883.4641622204,
            "unit": "iter/sec",
            "range": "stddev: 2.7708757441670415e-7",
            "extra": "mean: 1.4516243341914752 usec\nrounds: 189741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 686229.5649471295,
            "unit": "iter/sec",
            "range": "stddev: 2.218585311672065e-7",
            "extra": "mean: 1.4572382932481855 usec\nrounds: 183108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 66336.6948212661,
            "unit": "iter/sec",
            "range": "stddev: 0.000005107108738863132",
            "extra": "mean: 15.074612967895739 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58066.203042782116,
            "unit": "iter/sec",
            "range": "stddev: 9.43925104796653e-7",
            "extra": "mean: 17.221721889809434 usec\nrounds: 21819"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "107717825+opentelemetrybot@users.noreply.github.com",
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da48e0b131ff34ff382b7d1206f71b2e31929cab",
          "message": "Copy change log updates from release/v1.22.x-0.43bx (#3594)",
          "timestamp": "2023-12-27T09:53:13-08:00",
          "tree_id": "89c2f3018489692d3c4cedf59a50d648af5c849d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/da48e0b131ff34ff382b7d1206f71b2e31929cab"
        },
        "date": 1703699648456,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 910180.5448925727,
            "unit": "iter/sec",
            "range": "stddev: 1.2609046896928258e-7",
            "extra": "mean: 1.0986831190926285 usec\nrounds: 27129"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 868618.3803790717,
            "unit": "iter/sec",
            "range": "stddev: 1.333171049830557e-7",
            "extra": "mean: 1.1512535568998576 usec\nrounds: 108066"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 777678.0064103686,
            "unit": "iter/sec",
            "range": "stddev: 1.2430172241967602e-7",
            "extra": "mean: 1.285879235052348 usec\nrounds: 121108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 682604.0664637538,
            "unit": "iter/sec",
            "range": "stddev: 1.3200080181385182e-7",
            "extra": "mean: 1.464978087781579 usec\nrounds: 115234"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 569424.3184455388,
            "unit": "iter/sec",
            "range": "stddev: 1.3166933671701518e-7",
            "extra": "mean: 1.7561596293075121 usec\nrounds: 120483"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 906660.0203165668,
            "unit": "iter/sec",
            "range": "stddev: 1.108873646700741e-7",
            "extra": "mean: 1.102949261676767 usec\nrounds: 52180"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 872988.0989432184,
            "unit": "iter/sec",
            "range": "stddev: 1.0720760310930397e-7",
            "extra": "mean: 1.1454909880335526 usec\nrounds: 138584"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 777091.4764565593,
            "unit": "iter/sec",
            "range": "stddev: 1.3179537877399286e-7",
            "extra": "mean: 1.2868497857676626 usec\nrounds: 126442"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 681473.7164557874,
            "unit": "iter/sec",
            "range": "stddev: 1.5995312434588472e-7",
            "extra": "mean: 1.4674080244808352 usec\nrounds: 134218"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 571196.0176531699,
            "unit": "iter/sec",
            "range": "stddev: 1.200421223198444e-7",
            "extra": "mean: 1.7507124858969163 usec\nrounds: 112741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 911849.6083297124,
            "unit": "iter/sec",
            "range": "stddev: 1.0286591932588043e-7",
            "extra": "mean: 1.0966720727464672 usec\nrounds: 34824"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 863222.422414362,
            "unit": "iter/sec",
            "range": "stddev: 1.1720130720971363e-7",
            "extra": "mean: 1.158449982338367 usec\nrounds: 128963"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 779861.9025245387,
            "unit": "iter/sec",
            "range": "stddev: 1.057676706906919e-7",
            "extra": "mean: 1.282278306919262 usec\nrounds: 136922"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 671294.3675241839,
            "unit": "iter/sec",
            "range": "stddev: 1.805404315821395e-7",
            "extra": "mean: 1.4896594525113072 usec\nrounds: 125496"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 569789.5410119913,
            "unit": "iter/sec",
            "range": "stddev: 1.3355460610602352e-7",
            "extra": "mean: 1.755033969602041 usec\nrounds: 127766"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 758041.1250694128,
            "unit": "iter/sec",
            "range": "stddev: 1.2075362244652213e-7",
            "extra": "mean: 1.3191896414702189 usec\nrounds: 3931"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 756881.2899521317,
            "unit": "iter/sec",
            "range": "stddev: 1.5846936826700855e-7",
            "extra": "mean: 1.3212111506458881 usec\nrounds: 186868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 755980.9122858528,
            "unit": "iter/sec",
            "range": "stddev: 1.7450145092049341e-7",
            "extra": "mean: 1.322784720815647 usec\nrounds: 138120"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 805869.8352837005,
            "unit": "iter/sec",
            "range": "stddev: 6.626374809901985e-8",
            "extra": "mean: 1.2408951870595297 usec\nrounds: 186803"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 755277.3432471977,
            "unit": "iter/sec",
            "range": "stddev: 1.6522316149210835e-7",
            "extra": "mean: 1.324016944160744 usec\nrounds: 195155"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 739915.1779556792,
            "unit": "iter/sec",
            "range": "stddev: 1.1867496935983132e-7",
            "extra": "mean: 1.3515062669249633 usec\nrounds: 19259"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 796259.2281754479,
            "unit": "iter/sec",
            "range": "stddev: 6.664808220887533e-8",
            "extra": "mean: 1.2558724151824332 usec\nrounds: 188707"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 800233.4131603732,
            "unit": "iter/sec",
            "range": "stddev: 7.47034729140134e-8",
            "extra": "mean: 1.2496353983154562 usec\nrounds: 190448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 800969.4927937024,
            "unit": "iter/sec",
            "range": "stddev: 6.393234035450217e-8",
            "extra": "mean: 1.2484870010617992 usec\nrounds: 190515"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 800059.9956006107,
            "unit": "iter/sec",
            "range": "stddev: 6.759661760903926e-8",
            "extra": "mean: 1.2499062639037375 usec\nrounds: 186868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 743033.4666760833,
            "unit": "iter/sec",
            "range": "stddev: 1.4918812303732043e-7",
            "extra": "mean: 1.3458344002638822 usec\nrounds: 30845"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 785984.7329425544,
            "unit": "iter/sec",
            "range": "stddev: 7.328958455013075e-8",
            "extra": "mean: 1.2722893436571208 usec\nrounds: 186479"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 788581.1250261521,
            "unit": "iter/sec",
            "range": "stddev: 6.996569717592639e-8",
            "extra": "mean: 1.2681003491769303 usec\nrounds: 183170"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 791440.3763209317,
            "unit": "iter/sec",
            "range": "stddev: 7.040043966982031e-8",
            "extra": "mean: 1.263519059576633 usec\nrounds: 181683"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 781096.0484284323,
            "unit": "iter/sec",
            "range": "stddev: 1.2899090446346727e-7",
            "extra": "mean: 1.280252283969434 usec\nrounds: 180704"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 732751.7398075507,
            "unit": "iter/sec",
            "range": "stddev: 1.5711993359694214e-7",
            "extra": "mean: 1.3647186975804917 usec\nrounds: 25994"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 737853.5342840407,
            "unit": "iter/sec",
            "range": "stddev: 1.7082254931354116e-7",
            "extra": "mean: 1.3552825236113115 usec\nrounds: 198547"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 790460.3189171739,
            "unit": "iter/sec",
            "range": "stddev: 9.833482294055197e-8",
            "extra": "mean: 1.2650856419584322 usec\nrounds: 184049"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 790719.311114318,
            "unit": "iter/sec",
            "range": "stddev: 8.427994599238975e-8",
            "extra": "mean: 1.2646712758168939 usec\nrounds: 186414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 741837.6885337295,
            "unit": "iter/sec",
            "range": "stddev: 1.5769614845657775e-7",
            "extra": "mean: 1.348003768825143 usec\nrounds: 170058"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 707321.5059070188,
            "unit": "iter/sec",
            "range": "stddev: 1.3504456211485116e-7",
            "extra": "mean: 1.4137842433020202 usec\nrounds: 25005"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 740592.395921075,
            "unit": "iter/sec",
            "range": "stddev: 6.791465888614033e-8",
            "extra": "mean: 1.3502704125881548 usec\nrounds: 166679"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 737413.363031788,
            "unit": "iter/sec",
            "range": "stddev: 6.931582236979234e-8",
            "extra": "mean: 1.3560915086873635 usec\nrounds: 168775"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 738100.4520814412,
            "unit": "iter/sec",
            "range": "stddev: 6.497701887077707e-8",
            "extra": "mean: 1.35482913901489 usec\nrounds: 170328"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 694615.3468159128,
            "unit": "iter/sec",
            "range": "stddev: 1.7495655098908612e-7",
            "extra": "mean: 1.4396457040345532 usec\nrounds: 199432"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 73478.68682863707,
            "unit": "iter/sec",
            "range": "stddev: 0.000004044889680470328",
            "extra": "mean: 13.609388560959786 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57405.99188842752,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011590792618498359",
            "extra": "mean: 17.419784365777854 usec\nrounds: 13913"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "107717825+opentelemetrybot@users.noreply.github.com",
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da48e0b131ff34ff382b7d1206f71b2e31929cab",
          "message": "Copy change log updates from release/v1.22.x-0.43bx (#3594)",
          "timestamp": "2023-12-27T09:53:13-08:00",
          "tree_id": "89c2f3018489692d3c4cedf59a50d648af5c849d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/da48e0b131ff34ff382b7d1206f71b2e31929cab"
        },
        "date": 1703699704150,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 903362.5240091973,
            "unit": "iter/sec",
            "range": "stddev: 8.190939009461314e-8",
            "extra": "mean: 1.1069752988666364 usec\nrounds: 33295"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 869968.3698323839,
            "unit": "iter/sec",
            "range": "stddev: 2.2971561751772907e-7",
            "extra": "mean: 1.149467077972811 usec\nrounds: 93565"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 767149.7260495638,
            "unit": "iter/sec",
            "range": "stddev: 2.3404327694318338e-7",
            "extra": "mean: 1.303526503423912 usec\nrounds: 129617"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 675035.1522154744,
            "unit": "iter/sec",
            "range": "stddev: 1.9333116284890918e-7",
            "extra": "mean: 1.4814043338602243 usec\nrounds: 120079"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 565519.516842064,
            "unit": "iter/sec",
            "range": "stddev: 2.1917435344786066e-7",
            "extra": "mean: 1.7682855679042389 usec\nrounds: 126115"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 924543.6083642745,
            "unit": "iter/sec",
            "range": "stddev: 1.9610428585314783e-7",
            "extra": "mean: 1.0816147458627992 usec\nrounds: 50444"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 872473.4773872736,
            "unit": "iter/sec",
            "range": "stddev: 1.9710543488883831e-7",
            "extra": "mean: 1.1461666468012528 usec\nrounds: 140103"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 779011.3374951386,
            "unit": "iter/sec",
            "range": "stddev: 2.090572152784342e-7",
            "extra": "mean: 1.2836783649586365 usec\nrounds: 131942"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 682097.0255496381,
            "unit": "iter/sec",
            "range": "stddev: 1.9538695934321316e-7",
            "extra": "mean: 1.4660670880278266 usec\nrounds: 129305"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 570960.9186225915,
            "unit": "iter/sec",
            "range": "stddev: 2.8383507916167717e-7",
            "extra": "mean: 1.7514333597690699 usec\nrounds: 120160"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 918467.8419087437,
            "unit": "iter/sec",
            "range": "stddev: 2.0278122270342283e-7",
            "extra": "mean: 1.0887697471495763 usec\nrounds: 35217"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 870135.1426680612,
            "unit": "iter/sec",
            "range": "stddev: 2.87128474909558e-7",
            "extra": "mean: 1.149246767500666 usec\nrounds: 143319"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 779954.8688088495,
            "unit": "iter/sec",
            "range": "stddev: 2.626509310047553e-7",
            "extra": "mean: 1.2821254664737263 usec\nrounds: 119651"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 687720.2825897915,
            "unit": "iter/sec",
            "range": "stddev: 2.378569729018133e-7",
            "extra": "mean: 1.4540795514045872 usec\nrounds: 121547"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 575945.010259529,
            "unit": "iter/sec",
            "range": "stddev: 2.2415413600986846e-7",
            "extra": "mean: 1.7362768705112765 usec\nrounds: 122072"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 759749.7863186535,
            "unit": "iter/sec",
            "range": "stddev: 1.2263792017597834e-7",
            "extra": "mean: 1.3162228117831691 usec\nrounds: 3905"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 753876.7880224505,
            "unit": "iter/sec",
            "range": "stddev: 3.1602944878971885e-7",
            "extra": "mean: 1.3264767079819146 usec\nrounds: 195939"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 750471.6706577496,
            "unit": "iter/sec",
            "range": "stddev: 3.580979301460419e-7",
            "extra": "mean: 1.332495334732025 usec\nrounds: 134521"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 807936.21388148,
            "unit": "iter/sec",
            "range": "stddev: 1.051555254305144e-7",
            "extra": "mean: 1.2377214720897445 usec\nrounds: 189641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 798289.2560949612,
            "unit": "iter/sec",
            "range": "stddev: 1.0644201419338463e-7",
            "extra": "mean: 1.2526787657042502 usec\nrounds: 193607"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 741905.6054359566,
            "unit": "iter/sec",
            "range": "stddev: 4.7514406163009073e-7",
            "extra": "mean: 1.3478803673580315 usec\nrounds: 18982"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 812167.4221761859,
            "unit": "iter/sec",
            "range": "stddev: 1.1376937782064382e-7",
            "extra": "mean: 1.23127322359289 usec\nrounds: 192842"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 811309.227102163,
            "unit": "iter/sec",
            "range": "stddev: 1.0326285465425958e-7",
            "extra": "mean: 1.2325756525311604 usec\nrounds: 188376"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 812145.9677979944,
            "unit": "iter/sec",
            "range": "stddev: 1.1438533817760552e-7",
            "extra": "mean: 1.2313057500135625 usec\nrounds: 193957"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 807871.4907165931,
            "unit": "iter/sec",
            "range": "stddev: 1.1215045931227888e-7",
            "extra": "mean: 1.2378206329734278 usec\nrounds: 195582"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 744257.044798504,
            "unit": "iter/sec",
            "range": "stddev: 2.4785908217844893e-7",
            "extra": "mean: 1.343621813174418 usec\nrounds: 29832"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 791850.7206096054,
            "unit": "iter/sec",
            "range": "stddev: 1.1282485254628422e-7",
            "extra": "mean: 1.2628642924390483 usec\nrounds: 185320"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 793953.33668832,
            "unit": "iter/sec",
            "range": "stddev: 9.710175579635002e-8",
            "extra": "mean: 1.2595198657028468 usec\nrounds: 185384"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 741249.2520811807,
            "unit": "iter/sec",
            "range": "stddev: 2.0881732906096672e-7",
            "extra": "mean: 1.3490738738586696 usec\nrounds: 196513"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 791989.4990933208,
            "unit": "iter/sec",
            "range": "stddev: 9.804328774578222e-8",
            "extra": "mean: 1.2626430036570084 usec\nrounds: 185448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 742229.719633831,
            "unit": "iter/sec",
            "range": "stddev: 2.7116543616414014e-7",
            "extra": "mean: 1.3472917798189712 usec\nrounds: 27896"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 788034.6237466835,
            "unit": "iter/sec",
            "range": "stddev: 1.0429645652771527e-7",
            "extra": "mean: 1.2689797755909942 usec\nrounds: 178957"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 788906.908804828,
            "unit": "iter/sec",
            "range": "stddev: 1.1034676745323565e-7",
            "extra": "mean: 1.2675766796300114 usec\nrounds: 180643"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 738496.2078783269,
            "unit": "iter/sec",
            "range": "stddev: 2.3653587960346045e-7",
            "extra": "mean: 1.3541030940063514 usec\nrounds: 199655"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 788989.2053879026,
            "unit": "iter/sec",
            "range": "stddev: 1.0453380416466506e-7",
            "extra": "mean: 1.2674444633350275 usec\nrounds: 185833"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 701860.5036169371,
            "unit": "iter/sec",
            "range": "stddev: 1.5091881243372034e-7",
            "extra": "mean: 1.4247845474230905 usec\nrounds: 26293"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 700910.9035367465,
            "unit": "iter/sec",
            "range": "stddev: 2.976140986657648e-7",
            "extra": "mean: 1.4267148577002744 usec\nrounds: 192358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 727289.6185390982,
            "unit": "iter/sec",
            "range": "stddev: 1.5235954055984968e-7",
            "extra": "mean: 1.3749680656912184 usec\nrounds: 145929"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 693542.0139002737,
            "unit": "iter/sec",
            "range": "stddev: 2.813950972498917e-7",
            "extra": "mean: 1.4418737148688336 usec\nrounds: 170544"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 692089.4125688164,
            "unit": "iter/sec",
            "range": "stddev: 2.2279914484972403e-7",
            "extra": "mean: 1.4449000112403352 usec\nrounds: 193817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 73424.15079342732,
            "unit": "iter/sec",
            "range": "stddev: 0.000004244337877564226",
            "extra": "mean: 13.619496980134178 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59839.897974511536,
            "unit": "iter/sec",
            "range": "stddev: 9.628069029829527e-7",
            "extra": "mean: 16.711258438741726 usec\nrounds: 25539"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iurisilvio@gmail.com",
            "name": "Iuri de Silvio",
            "username": "iurisilvio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e7334b8dd282c20db36acd09f225ac47be11d8d",
          "message": "Fix docker proto tests (#3611)\n\n* Fix docker proto tests\r\n\r\n* Remove changelog",
          "timestamp": "2024-01-05T16:08:18-06:00",
          "tree_id": "4d8540fa0761f876054db82164da036d0108d5ae",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8e7334b8dd282c20db36acd09f225ac47be11d8d"
        },
        "date": 1704492557368,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 912838.3233784873,
            "unit": "iter/sec",
            "range": "stddev: 1.5798527614829447e-7",
            "extra": "mean: 1.0954842433640608 usec\nrounds: 31334"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 862495.9350283586,
            "unit": "iter/sec",
            "range": "stddev: 8.470065080070153e-8",
            "extra": "mean: 1.1594257542409405 usec\nrounds: 88070"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 779165.4602641648,
            "unit": "iter/sec",
            "range": "stddev: 1.3751767306068822e-7",
            "extra": "mean: 1.2834244470500071 usec\nrounds: 120890"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 678784.7872382473,
            "unit": "iter/sec",
            "range": "stddev: 1.1913677673696414e-7",
            "extra": "mean: 1.4732209955215292 usec\nrounds: 105063"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 568543.1748730721,
            "unit": "iter/sec",
            "range": "stddev: 3.7740178396607436e-7",
            "extra": "mean: 1.7588813729463046 usec\nrounds: 109387"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 909705.4086021978,
            "unit": "iter/sec",
            "range": "stddev: 9.760153583749199e-8",
            "extra": "mean: 1.0992569578502824 usec\nrounds: 54455"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 874965.0156175965,
            "unit": "iter/sec",
            "range": "stddev: 1.2178787520301342e-7",
            "extra": "mean: 1.1429028385713769 usec\nrounds: 134386"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 771439.6231854071,
            "unit": "iter/sec",
            "range": "stddev: 1.0883196264766022e-7",
            "extra": "mean: 1.2962777253660211 usec\nrounds: 136505"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 673078.5069530924,
            "unit": "iter/sec",
            "range": "stddev: 1.5379062252253572e-7",
            "extra": "mean: 1.485710789558299 usec\nrounds: 122911"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 570495.1953533004,
            "unit": "iter/sec",
            "range": "stddev: 3.418765755043796e-7",
            "extra": "mean: 1.752863140908159 usec\nrounds: 123675"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 904834.941156676,
            "unit": "iter/sec",
            "range": "stddev: 1.1090095126281674e-7",
            "extra": "mean: 1.1051739433511174 usec\nrounds: 37213"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 863610.145609812,
            "unit": "iter/sec",
            "range": "stddev: 1.0408207527938688e-7",
            "extra": "mean: 1.1579298889476113 usec\nrounds: 137378"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 771075.740331426,
            "unit": "iter/sec",
            "range": "stddev: 8.73193112655334e-8",
            "extra": "mean: 1.2968894593547673 usec\nrounds: 129899"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 677785.5848969406,
            "unit": "iter/sec",
            "range": "stddev: 1.2937301030515152e-7",
            "extra": "mean: 1.4753928414574546 usec\nrounds: 128010"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 571900.9335079107,
            "unit": "iter/sec",
            "range": "stddev: 3.5446539059735763e-7",
            "extra": "mean: 1.748554585959891 usec\nrounds: 119438"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 737561.8446033649,
            "unit": "iter/sec",
            "range": "stddev: 1.1209232047617285e-7",
            "extra": "mean: 1.3558185083960859 usec\nrounds: 3951"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 795443.0424992255,
            "unit": "iter/sec",
            "range": "stddev: 9.38987453095062e-8",
            "extra": "mean: 1.2571610367702395 usec\nrounds: 187718"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 746533.9210299613,
            "unit": "iter/sec",
            "range": "stddev: 1.7317883623584953e-7",
            "extra": "mean: 1.3395238606443256 usec\nrounds: 144554"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 794119.7512861774,
            "unit": "iter/sec",
            "range": "stddev: 9.868525396517872e-8",
            "extra": "mean: 1.2592559225234903 usec\nrounds: 185320"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 790825.1087543154,
            "unit": "iter/sec",
            "range": "stddev: 1.0804321302314953e-7",
            "extra": "mean: 1.2645020864033651 usec\nrounds: 185769"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 729875.8453935503,
            "unit": "iter/sec",
            "range": "stddev: 1.4015802545135685e-7",
            "extra": "mean: 1.370096032511938 usec\nrounds: 18978"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 731223.0998624437,
            "unit": "iter/sec",
            "range": "stddev: 1.6832444440961355e-7",
            "extra": "mean: 1.3675716757144545 usec\nrounds: 199878"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 778835.0211165374,
            "unit": "iter/sec",
            "range": "stddev: 9.95167861061563e-8",
            "extra": "mean: 1.2839689701759953 usec\nrounds: 179857"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 733326.4022800354,
            "unit": "iter/sec",
            "range": "stddev: 3.164972981156485e-7",
            "extra": "mean: 1.3636492520804262 usec\nrounds: 199358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 779923.8736093965,
            "unit": "iter/sec",
            "range": "stddev: 1.105917595602133e-7",
            "extra": "mean: 1.2821764198243053 usec\nrounds: 184239"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 733083.1929984515,
            "unit": "iter/sec",
            "range": "stddev: 1.7425867471500005e-7",
            "extra": "mean: 1.3641016593352895 usec\nrounds: 27515"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 777210.4287846863,
            "unit": "iter/sec",
            "range": "stddev: 1.0168160916642012e-7",
            "extra": "mean: 1.2866528329575901 usec\nrounds: 177186"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 780068.9948672744,
            "unit": "iter/sec",
            "range": "stddev: 9.88789409901219e-8",
            "extra": "mean: 1.2819378882891581 usec\nrounds: 176487"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 778388.2495431692,
            "unit": "iter/sec",
            "range": "stddev: 7.583695304907866e-8",
            "extra": "mean: 1.2847059299609074 usec\nrounds: 178008"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 777517.9459948438,
            "unit": "iter/sec",
            "range": "stddev: 9.864920627872575e-8",
            "extra": "mean: 1.286143947096279 usec\nrounds: 176661"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 727956.2076046076,
            "unit": "iter/sec",
            "range": "stddev: 6.551830743932776e-7",
            "extra": "mean: 1.3737090082528072 usec\nrounds: 27563"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 769323.1390918024,
            "unit": "iter/sec",
            "range": "stddev: 1.3059931222761505e-7",
            "extra": "mean: 1.2998439136778275 usec\nrounds: 168299"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 729258.6229918506,
            "unit": "iter/sec",
            "range": "stddev: 3.3156940628116026e-7",
            "extra": "mean: 1.3712556402794498 usec\nrounds: 170004"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 729311.7217158582,
            "unit": "iter/sec",
            "range": "stddev: 1.90530449226946e-7",
            "extra": "mean: 1.371155803786193 usec\nrounds: 177890"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 724062.2549318697,
            "unit": "iter/sec",
            "range": "stddev: 1.826416096601506e-7",
            "extra": "mean: 1.3810967125942706 usec\nrounds: 199432"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 696725.4925517732,
            "unit": "iter/sec",
            "range": "stddev: 1.5767946245027456e-7",
            "extra": "mean: 1.4352855043920911 usec\nrounds: 24176"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 700273.947886612,
            "unit": "iter/sec",
            "range": "stddev: 3.0786126032373427e-7",
            "extra": "mean: 1.4280125699634332 usec\nrounds: 182052"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 732193.3978873667,
            "unit": "iter/sec",
            "range": "stddev: 1.0273452744955295e-7",
            "extra": "mean: 1.3657593784447506 usec\nrounds: 170490"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 692875.2361903779,
            "unit": "iter/sec",
            "range": "stddev: 1.6789532898360765e-7",
            "extra": "mean: 1.4432612796183626 usec\nrounds: 188509"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 688768.0110764763,
            "unit": "iter/sec",
            "range": "stddev: 1.782528557729641e-7",
            "extra": "mean: 1.4518676592385567 usec\nrounds: 188774"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 71079.41064991168,
            "unit": "iter/sec",
            "range": "stddev: 0.000004030058632232089",
            "extra": "mean: 14.06877168587276 usec\nrounds: 35"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59253.11324841778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010873260463463528",
            "extra": "mean: 16.876750354154645 usec\nrounds: 19332"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iurisilvio@gmail.com",
            "name": "Iuri de Silvio",
            "username": "iurisilvio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e7334b8dd282c20db36acd09f225ac47be11d8d",
          "message": "Fix docker proto tests (#3611)\n\n* Fix docker proto tests\r\n\r\n* Remove changelog",
          "timestamp": "2024-01-05T16:08:18-06:00",
          "tree_id": "4d8540fa0761f876054db82164da036d0108d5ae",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8e7334b8dd282c20db36acd09f225ac47be11d8d"
        },
        "date": 1704492649016,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 917436.3273859115,
            "unit": "iter/sec",
            "range": "stddev: 1.925488752074242e-7",
            "extra": "mean: 1.0899938994669423 usec\nrounds: 31142"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 870117.7110816997,
            "unit": "iter/sec",
            "range": "stddev: 2.1261668145981293e-7",
            "extra": "mean: 1.1492697910456682 usec\nrounds: 96630"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 766370.6112764756,
            "unit": "iter/sec",
            "range": "stddev: 1.9695502092571606e-7",
            "extra": "mean: 1.3048517065840881 usec\nrounds: 121961"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 671067.1556395952,
            "unit": "iter/sec",
            "range": "stddev: 2.1698535709752243e-7",
            "extra": "mean: 1.4901638257752285 usec\nrounds: 115531"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 564055.6439009049,
            "unit": "iter/sec",
            "range": "stddev: 2.0432797767591765e-7",
            "extra": "mean: 1.7728747346346616 usec\nrounds: 111616"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 904436.4241548481,
            "unit": "iter/sec",
            "range": "stddev: 1.3200049182432812e-7",
            "extra": "mean: 1.1056609102562973 usec\nrounds: 54918"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 860968.046927627,
            "unit": "iter/sec",
            "range": "stddev: 2.1271280561249314e-7",
            "extra": "mean: 1.1614832903131653 usec\nrounds: 138655"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 762926.3260914589,
            "unit": "iter/sec",
            "range": "stddev: 2.0814019638335878e-7",
            "extra": "mean: 1.3107425524599357 usec\nrounds: 136748"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 669007.0335605274,
            "unit": "iter/sec",
            "range": "stddev: 2.3595177460278834e-7",
            "extra": "mean: 1.494752595765537 usec\nrounds: 118725"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 565553.7401832981,
            "unit": "iter/sec",
            "range": "stddev: 2.2298748269927375e-7",
            "extra": "mean: 1.768178563677956 usec\nrounds: 119998"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 911742.7509243685,
            "unit": "iter/sec",
            "range": "stddev: 2.919097142998632e-7",
            "extra": "mean: 1.0968006041025848 usec\nrounds: 35701"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 871053.1341102545,
            "unit": "iter/sec",
            "range": "stddev: 1.816512104131778e-7",
            "extra": "mean: 1.1480355914469667 usec\nrounds: 120972"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 775990.2118036,
            "unit": "iter/sec",
            "range": "stddev: 2.0495628246625248e-7",
            "extra": "mean: 1.2886760487297175 usec\nrounds: 135540"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 677243.7671346688,
            "unit": "iter/sec",
            "range": "stddev: 2.2991321957955202e-7",
            "extra": "mean: 1.4765732052889482 usec\nrounds: 116966"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 567780.4350032368,
            "unit": "iter/sec",
            "range": "stddev: 2.5879903665900377e-7",
            "extra": "mean: 1.7612442034821072 usec\nrounds: 122183"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 748769.598111445,
            "unit": "iter/sec",
            "range": "stddev: 1.476591800143503e-7",
            "extra": "mean: 1.3355243088424142 usec\nrounds: 3852"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 799813.9044262447,
            "unit": "iter/sec",
            "range": "stddev: 1.2254517294563574e-7",
            "extra": "mean: 1.2502908419895014 usec\nrounds: 191740"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 749739.5262422807,
            "unit": "iter/sec",
            "range": "stddev: 2.1451949562801425e-7",
            "extra": "mean: 1.3337965586688927 usec\nrounds: 158838"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 805506.047708958,
            "unit": "iter/sec",
            "range": "stddev: 9.756816814808214e-8",
            "extra": "mean: 1.24145560774401 usec\nrounds: 187455"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 802705.0834265111,
            "unit": "iter/sec",
            "range": "stddev: 1.1783076423154614e-7",
            "extra": "mean: 1.2457875509287857 usec\nrounds: 187325"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 748510.4651126224,
            "unit": "iter/sec",
            "range": "stddev: 2.6799414476259314e-7",
            "extra": "mean: 1.3359866649954428 usec\nrounds: 19649"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 800299.4126288487,
            "unit": "iter/sec",
            "range": "stddev: 1.047818208598125e-7",
            "extra": "mean: 1.2495323427955152 usec\nrounds: 188641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 799220.4235906898,
            "unit": "iter/sec",
            "range": "stddev: 1.4806259644602056e-7",
            "extra": "mean: 1.2512192762883358 usec\nrounds: 188774"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 749834.9607913595,
            "unit": "iter/sec",
            "range": "stddev: 2.459165769710256e-7",
            "extra": "mean: 1.3336268009491337 usec\nrounds: 183546"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 804763.3575246985,
            "unit": "iter/sec",
            "range": "stddev: 1.0658670990136315e-7",
            "extra": "mean: 1.2426013071417825 usec\nrounds: 190786"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 739645.1527292312,
            "unit": "iter/sec",
            "range": "stddev: 2.3719132157213086e-7",
            "extra": "mean: 1.3519996667457095 usec\nrounds: 28758"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 783942.5605093929,
            "unit": "iter/sec",
            "range": "stddev: 1.0910600164840579e-7",
            "extra": "mean: 1.2756036607455226 usec\nrounds: 184176"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 790941.9267208395,
            "unit": "iter/sec",
            "range": "stddev: 1.024435663665988e-7",
            "extra": "mean: 1.2643153260896067 usec\nrounds: 176487"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 787351.3192588307,
            "unit": "iter/sec",
            "range": "stddev: 9.902090719039272e-8",
            "extra": "mean: 1.2700810623411987 usec\nrounds: 175105"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 788531.4023699008,
            "unit": "iter/sec",
            "range": "stddev: 1.0261980493301643e-7",
            "extra": "mean: 1.268180312153122 usec\nrounds: 181806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 734039.3267928993,
            "unit": "iter/sec",
            "range": "stddev: 1.350222046652963e-7",
            "extra": "mean: 1.362324828519901 usec\nrounds: 28922"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 783635.2187634322,
            "unit": "iter/sec",
            "range": "stddev: 9.857323176270507e-8",
            "extra": "mean: 1.2761039525226916 usec\nrounds: 182052"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 788233.0067041566,
            "unit": "iter/sec",
            "range": "stddev: 1.1100727759120002e-7",
            "extra": "mean: 1.268660397997422 usec\nrounds: 172683"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 786008.402406376,
            "unit": "iter/sec",
            "range": "stddev: 1.1477136453480473e-7",
            "extra": "mean: 1.2722510305723014 usec\nrounds: 188973"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 789951.9031798034,
            "unit": "iter/sec",
            "range": "stddev: 1.1167286424573042e-7",
            "extra": "mean: 1.2658998553895335 usec\nrounds: 183421"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 706526.2592343832,
            "unit": "iter/sec",
            "range": "stddev: 1.8129026511895494e-7",
            "extra": "mean: 1.415375560256791 usec\nrounds: 24827"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 736925.5677160779,
            "unit": "iter/sec",
            "range": "stddev: 1.315308007904501e-7",
            "extra": "mean: 1.3569891503415412 usec\nrounds: 196225"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 738875.0666337627,
            "unit": "iter/sec",
            "range": "stddev: 1.1569297346718552e-7",
            "extra": "mean: 1.353408776609414 usec\nrounds: 167146"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 694967.7001867332,
            "unit": "iter/sec",
            "range": "stddev: 2.972126723276872e-7",
            "extra": "mean: 1.4389157938294208 usec\nrounds: 197889"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 692108.3646194563,
            "unit": "iter/sec",
            "range": "stddev: 2.5572962455840217e-7",
            "extra": "mean: 1.444860445444598 usec\nrounds: 193537"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 70695.87636320105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054098937994048976",
            "extra": "mean: 14.14509659463709 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58804.03969881098,
            "unit": "iter/sec",
            "range": "stddev: 0.000001203195224137895",
            "extra": "mean: 17.00563439385985 usec\nrounds: 21763"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "975733c71473cddddd0859c6fcbd2b02405f7e12",
          "message": "Separate contrib jobs per instrumentation (#3507)\n\n* Separate contrib jobs per instrumentation\r\n\r\nFixes #3499\r\n\r\n* Separate exporters\r\n\r\n* Refactor listings\r\n\r\n* Fix lists",
          "timestamp": "2024-01-05T16:21:29-06:00",
          "tree_id": "d5e1153216836475c72039dd7ce91c85506252d0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/975733c71473cddddd0859c6fcbd2b02405f7e12"
        },
        "date": 1704493401583,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 916372.3514873286,
            "unit": "iter/sec",
            "range": "stddev: 3.194006682284697e-7",
            "extra": "mean: 1.0912594627903587 usec\nrounds: 24038"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 877024.6877814182,
            "unit": "iter/sec",
            "range": "stddev: 1.5873812079363854e-7",
            "extra": "mean: 1.1402187577292364 usec\nrounds: 81592"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 788725.7080179658,
            "unit": "iter/sec",
            "range": "stddev: 2.3875678814765266e-7",
            "extra": "mean: 1.2678678909971852 usec\nrounds: 111177"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 680571.1121642129,
            "unit": "iter/sec",
            "range": "stddev: 2.7398317439154685e-7",
            "extra": "mean: 1.469354167590224 usec\nrounds: 96042"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 570467.1790403432,
            "unit": "iter/sec",
            "range": "stddev: 2.44178474732196e-7",
            "extra": "mean: 1.7529492260750739 usec\nrounds: 104756"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 919550.5068998336,
            "unit": "iter/sec",
            "range": "stddev: 2.1814483063184284e-7",
            "extra": "mean: 1.0874878459600803 usec\nrounds: 53410"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 864684.9045537733,
            "unit": "iter/sec",
            "range": "stddev: 2.899980485856174e-7",
            "extra": "mean: 1.156490641543068 usec\nrounds: 124738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 782307.2986108817,
            "unit": "iter/sec",
            "range": "stddev: 3.0988441693174805e-7",
            "extra": "mean: 1.2782700631525084 usec\nrounds: 106122"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 675976.2423366574,
            "unit": "iter/sec",
            "range": "stddev: 3.425799591101985e-7",
            "extra": "mean: 1.479341931520085 usec\nrounds: 116484"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 568452.8782689559,
            "unit": "iter/sec",
            "range": "stddev: 3.621343577811072e-7",
            "extra": "mean: 1.7591607646445295 usec\nrounds: 106396"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 932443.1399152629,
            "unit": "iter/sec",
            "range": "stddev: 2.353373040903461e-7",
            "extra": "mean: 1.0724514527404603 usec\nrounds: 35076"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 882467.0908906109,
            "unit": "iter/sec",
            "range": "stddev: 2.0608012036836818e-7",
            "extra": "mean: 1.1331867333327654 usec\nrounds: 124767"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 793488.4651395214,
            "unit": "iter/sec",
            "range": "stddev: 1.9014494456066892e-7",
            "extra": "mean: 1.260257765466278 usec\nrounds: 123590"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 681616.3233373261,
            "unit": "iter/sec",
            "range": "stddev: 2.2700269875065037e-7",
            "extra": "mean: 1.4671010152805695 usec\nrounds: 112599"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 574633.8857573519,
            "unit": "iter/sec",
            "range": "stddev: 2.430363085103439e-7",
            "extra": "mean: 1.7402384801620727 usec\nrounds: 114692"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 763703.5120076688,
            "unit": "iter/sec",
            "range": "stddev: 1.1570899952275822e-7",
            "extra": "mean: 1.3094086700886591 usec\nrounds: 3741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 760323.0148393521,
            "unit": "iter/sec",
            "range": "stddev: 2.2705912035038307e-7",
            "extra": "mean: 1.315230475051829 usec\nrounds: 185962"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 758436.3756032361,
            "unit": "iter/sec",
            "range": "stddev: 2.232466768547751e-7",
            "extra": "mean: 1.318502160718006 usec\nrounds: 136678"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 813372.6145328252,
            "unit": "iter/sec",
            "range": "stddev: 1.0855262695669433e-7",
            "extra": "mean: 1.2294488185766712 usec\nrounds: 191467"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 812471.5398293262,
            "unit": "iter/sec",
            "range": "stddev: 1.0836380219082464e-7",
            "extra": "mean: 1.2308123435438336 usec\nrounds: 194589"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 767979.0255814368,
            "unit": "iter/sec",
            "range": "stddev: 1.539738504927694e-7",
            "extra": "mean: 1.3021188947743723 usec\nrounds: 18349"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 807569.9587325706,
            "unit": "iter/sec",
            "range": "stddev: 1.2612844085391518e-7",
            "extra": "mean: 1.2382828127601924 usec\nrounds: 189909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 747458.5435284547,
            "unit": "iter/sec",
            "range": "stddev: 2.2973401262094792e-7",
            "extra": "mean: 1.33786684045298 usec\nrounds: 198842"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 820443.0405915681,
            "unit": "iter/sec",
            "range": "stddev: 1.254990400779903e-7",
            "extra": "mean: 1.2188536565304584 usec\nrounds: 189239"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 812213.154389152,
            "unit": "iter/sec",
            "range": "stddev: 1.0699369717594965e-7",
            "extra": "mean: 1.231203895918281 usec\nrounds: 192911"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 743757.5879225809,
            "unit": "iter/sec",
            "range": "stddev: 2.0920231906454062e-7",
            "extra": "mean: 1.3445240979566206 usec\nrounds: 28156"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 787184.5701935398,
            "unit": "iter/sec",
            "range": "stddev: 1.0962909710900753e-7",
            "extra": "mean: 1.270350103221836 usec\nrounds: 184239"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 790085.9043485917,
            "unit": "iter/sec",
            "range": "stddev: 1.0695253239054928e-7",
            "extra": "mean: 1.2656851546092038 usec\nrounds: 185576"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 737315.4215422638,
            "unit": "iter/sec",
            "range": "stddev: 2.1762294916875113e-7",
            "extra": "mean: 1.3562716454624961 usec\nrounds: 189173"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 788371.2835406511,
            "unit": "iter/sec",
            "range": "stddev: 1.1215365136876517e-7",
            "extra": "mean: 1.268437880574371 usec\nrounds: 185641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 748311.2448865642,
            "unit": "iter/sec",
            "range": "stddev: 2.597882040609719e-7",
            "extra": "mean: 1.336342339946514 usec\nrounds: 27537"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 791387.901566595,
            "unit": "iter/sec",
            "range": "stddev: 9.717083174906878e-8",
            "extra": "mean: 1.2636028400490407 usec\nrounds: 186155"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 744630.1117843228,
            "unit": "iter/sec",
            "range": "stddev: 2.3990261593932834e-7",
            "extra": "mean: 1.3429486454741215 usec\nrounds: 186998"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 795697.4067040129,
            "unit": "iter/sec",
            "range": "stddev: 1.2561380079709034e-7",
            "extra": "mean: 1.2567591543904386 usec\nrounds: 188575"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 793473.6506139955,
            "unit": "iter/sec",
            "range": "stddev: 1.3795893531806897e-7",
            "extra": "mean: 1.2602812950703441 usec\nrounds: 184429"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 716786.5844745379,
            "unit": "iter/sec",
            "range": "stddev: 2.797724265313776e-7",
            "extra": "mean: 1.3951153964929188 usec\nrounds: 24002"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 713833.4065573945,
            "unit": "iter/sec",
            "range": "stddev: 4.271492187122447e-7",
            "extra": "mean: 1.4008870848769905 usec\nrounds: 191946"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 708153.5547920989,
            "unit": "iter/sec",
            "range": "stddev: 2.4980786298696645e-7",
            "extra": "mean: 1.4121231097873705 usec\nrounds: 193050"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 705593.7597436194,
            "unit": "iter/sec",
            "range": "stddev: 2.370342182458587e-7",
            "extra": "mean: 1.4172460940745202 usec\nrounds: 185448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 752788.5176026424,
            "unit": "iter/sec",
            "range": "stddev: 1.1495903080205483e-7",
            "extra": "mean: 1.3283943320291816 usec\nrounds: 167250"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 71931.83933349303,
            "unit": "iter/sec",
            "range": "stddev: 0.000004096368931985899",
            "extra": "mean: 13.902049624558652 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59056.30522418913,
            "unit": "iter/sec",
            "range": "stddev: 8.885250786433812e-7",
            "extra": "mean: 16.93299294975883 usec\nrounds: 24082"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "975733c71473cddddd0859c6fcbd2b02405f7e12",
          "message": "Separate contrib jobs per instrumentation (#3507)\n\n* Separate contrib jobs per instrumentation\r\n\r\nFixes #3499\r\n\r\n* Separate exporters\r\n\r\n* Refactor listings\r\n\r\n* Fix lists",
          "timestamp": "2024-01-05T16:21:29-06:00",
          "tree_id": "d5e1153216836475c72039dd7ce91c85506252d0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/975733c71473cddddd0859c6fcbd2b02405f7e12"
        },
        "date": 1704493453869,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 930373.215839006,
            "unit": "iter/sec",
            "range": "stddev: 1.5467289874184302e-7",
            "extra": "mean: 1.0748374770206652 usec\nrounds: 32097"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 874765.4812824423,
            "unit": "iter/sec",
            "range": "stddev: 1.2976712828355568e-7",
            "extra": "mean: 1.1431635351385363 usec\nrounds: 96145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 783134.5823549402,
            "unit": "iter/sec",
            "range": "stddev: 4.3559010172498365e-7",
            "extra": "mean: 1.276919730696773 usec\nrounds: 125145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 688201.9748251709,
            "unit": "iter/sec",
            "range": "stddev: 1.603165856187951e-7",
            "extra": "mean: 1.4530617995596968 usec\nrounds: 93581"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 569972.3675649266,
            "unit": "iter/sec",
            "range": "stddev: 1.2640979948181089e-7",
            "extra": "mean: 1.7544710180815708 usec\nrounds: 104005"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 915832.756042603,
            "unit": "iter/sec",
            "range": "stddev: 1.8276571522690047e-7",
            "extra": "mean: 1.0919024171193563 usec\nrounds: 57371"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 866681.3679943989,
            "unit": "iter/sec",
            "range": "stddev: 1.2783954572644595e-7",
            "extra": "mean: 1.1538265814045545 usec\nrounds: 146128"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 782724.2463447165,
            "unit": "iter/sec",
            "range": "stddev: 1.195817658244418e-7",
            "extra": "mean: 1.2775891441589429 usec\nrounds: 129180"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 681561.1179399963,
            "unit": "iter/sec",
            "range": "stddev: 4.678134066463494e-7",
            "extra": "mean: 1.467219848195681 usec\nrounds: 116610"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 568807.8876459874,
            "unit": "iter/sec",
            "range": "stddev: 1.2365641122419007e-7",
            "extra": "mean: 1.7580628217701093 usec\nrounds: 115930"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 942639.6775921165,
            "unit": "iter/sec",
            "range": "stddev: 1.3948170175606077e-7",
            "extra": "mean: 1.0608507405018266 usec\nrounds: 36249"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 883827.4908026193,
            "unit": "iter/sec",
            "range": "stddev: 1.302979479409888e-7",
            "extra": "mean: 1.1314425161089778 usec\nrounds: 133717"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 795157.6402138425,
            "unit": "iter/sec",
            "range": "stddev: 1.5524645280323786e-7",
            "extra": "mean: 1.257612263816102 usec\nrounds: 134927"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 688574.4400619444,
            "unit": "iter/sec",
            "range": "stddev: 4.4257855652263086e-7",
            "extra": "mean: 1.4522758060988141 usec\nrounds: 128623"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 567803.5535281585,
            "unit": "iter/sec",
            "range": "stddev: 2.392401414988366e-7",
            "extra": "mean: 1.7611724931735708 usec\nrounds: 117042"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 759367.4569841394,
            "unit": "iter/sec",
            "range": "stddev: 1.507178820793702e-7",
            "extra": "mean: 1.316885508856994 usec\nrounds: 4039"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 821332.6440772454,
            "unit": "iter/sec",
            "range": "stddev: 1.1104728654008284e-7",
            "extra": "mean: 1.2175334892764245 usec\nrounds: 193120"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 767122.916983359,
            "unit": "iter/sec",
            "range": "stddev: 1.6438122459817677e-7",
            "extra": "mean: 1.3035720584810695 usec\nrounds: 148554"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 764996.7840277354,
            "unit": "iter/sec",
            "range": "stddev: 1.7278110442226895e-7",
            "extra": "mean: 1.307195037781681 usec\nrounds: 196729"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 803777.3273851203,
            "unit": "iter/sec",
            "range": "stddev: 1.1636569907696871e-7",
            "extra": "mean: 1.2441256625802557 usec\nrounds: 194519"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 754731.2178276093,
            "unit": "iter/sec",
            "range": "stddev: 1.5959865752756407e-7",
            "extra": "mean: 1.3249750061728776 usec\nrounds: 18039"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 763884.7524336405,
            "unit": "iter/sec",
            "range": "stddev: 3.6674021900821634e-7",
            "extra": "mean: 1.3090979978512804 usec\nrounds: 197307"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 819248.012331904,
            "unit": "iter/sec",
            "range": "stddev: 1.0416572271542768e-7",
            "extra": "mean: 1.22063158524316 usec\nrounds: 190111"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 815194.4014409077,
            "unit": "iter/sec",
            "range": "stddev: 1.2242649953961944e-7",
            "extra": "mean: 1.226701260745212 usec\nrounds: 189842"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 816918.8687159871,
            "unit": "iter/sec",
            "range": "stddev: 1.268137771737612e-7",
            "extra": "mean: 1.2241117671474224 usec\nrounds: 195511"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 741625.4731933812,
            "unit": "iter/sec",
            "range": "stddev: 1.4849360162801036e-7",
            "extra": "mean: 1.3483894986698317 usec\nrounds: 29685"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 748816.6580586864,
            "unit": "iter/sec",
            "range": "stddev: 1.5689799672597674e-7",
            "extra": "mean: 1.3354403768106715 usec\nrounds: 198108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 798136.2654965891,
            "unit": "iter/sec",
            "range": "stddev: 1.1904963017619638e-7",
            "extra": "mean: 1.2529188851953923 usec\nrounds: 183108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 746191.4611580261,
            "unit": "iter/sec",
            "range": "stddev: 1.6148450011920036e-7",
            "extra": "mean: 1.3401386266844764 usec\nrounds: 199210"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 797628.3069976843,
            "unit": "iter/sec",
            "range": "stddev: 1.0948248449567057e-7",
            "extra": "mean: 1.2537167891696994 usec\nrounds: 187390"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 742202.0689320363,
            "unit": "iter/sec",
            "range": "stddev: 1.692445927413542e-7",
            "extra": "mean: 1.3473419731083645 usec\nrounds: 27719"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 793419.49975759,
            "unit": "iter/sec",
            "range": "stddev: 6.350988436261915e-8",
            "extra": "mean: 1.2603673092298913 usec\nrounds: 180887"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 795184.4591232156,
            "unit": "iter/sec",
            "range": "stddev: 1.0240806414419962e-7",
            "extra": "mean: 1.2575698487651754 usec\nrounds: 183672"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 741664.6818270896,
            "unit": "iter/sec",
            "range": "stddev: 3.382145230914612e-7",
            "extra": "mean: 1.3483182150948618 usec\nrounds: 198254"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 795898.237059992,
            "unit": "iter/sec",
            "range": "stddev: 1.0216522709864555e-7",
            "extra": "mean: 1.2564420342152656 usec\nrounds: 189574"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 708579.1154503484,
            "unit": "iter/sec",
            "range": "stddev: 3.3342383681123884e-7",
            "extra": "mean: 1.4112750124796363 usec\nrounds: 24730"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 753881.1093026984,
            "unit": "iter/sec",
            "range": "stddev: 1.0981781061915813e-7",
            "extra": "mean: 1.3264691045580768 usec\nrounds: 173352"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 698766.8883755852,
            "unit": "iter/sec",
            "range": "stddev: 1.5147584169561094e-7",
            "extra": "mean: 1.4310924238621092 usec\nrounds: 195582"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 707140.589693974,
            "unit": "iter/sec",
            "range": "stddev: 1.5438620865978488e-7",
            "extra": "mean: 1.4141459485910224 usec\nrounds: 191058"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 706611.7927411592,
            "unit": "iter/sec",
            "range": "stddev: 2.0595136176869685e-7",
            "extra": "mean: 1.415204232752329 usec\nrounds: 192773"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 68237.71844378687,
            "unit": "iter/sec",
            "range": "stddev: 0.00000524621828588475",
            "extra": "mean: 14.654651749879122 usec\nrounds: 32"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59274.64053657539,
            "unit": "iter/sec",
            "range": "stddev: 6.778221225571526e-7",
            "extra": "mean: 16.870621077540747 usec\nrounds: 22275"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jerevoss@gmail.com",
            "name": "Jeremy Voss",
            "username": "jeremydvoss"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18c0cb4c0de9af5ab9783d6c7770e57b448c3bf2",
          "message": "Improve Resource Detector timeout messaging (#3645)",
          "timestamp": "2024-01-24T10:11:30-08:00",
          "tree_id": "7eda395ced4c5e158072fcaeeb311f976d48b89b",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18c0cb4c0de9af5ab9783d6c7770e57b448c3bf2"
        },
        "date": 1706123864030,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 909135.238108655,
            "unit": "iter/sec",
            "range": "stddev: 2.2185328498772998e-7",
            "extra": "mean: 1.0999463645038972 usec\nrounds: 25387"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 869081.4303969985,
            "unit": "iter/sec",
            "range": "stddev: 1.9114964539352833e-7",
            "extra": "mean: 1.1506401644586945 usec\nrounds: 92120"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 772226.2772700901,
            "unit": "iter/sec",
            "range": "stddev: 2.282800552705008e-7",
            "extra": "mean: 1.2949572287738207 usec\nrounds: 111523"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 679727.5419560788,
            "unit": "iter/sec",
            "range": "stddev: 2.0769318783126902e-7",
            "extra": "mean: 1.4711776973495299 usec\nrounds: 109387"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 570982.0324108548,
            "unit": "iter/sec",
            "range": "stddev: 2.111135941193976e-7",
            "extra": "mean: 1.7513685952212972 usec\nrounds: 109656"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 914540.4171135104,
            "unit": "iter/sec",
            "range": "stddev: 1.7631478482342345e-7",
            "extra": "mean: 1.093445386652477 usec\nrounds: 56071"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 864545.5359838179,
            "unit": "iter/sec",
            "range": "stddev: 2.0966335329174943e-7",
            "extra": "mean: 1.1566770729572275 usec\nrounds: 134791"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 772919.003231587,
            "unit": "iter/sec",
            "range": "stddev: 2.3454234555708096e-7",
            "extra": "mean: 1.2937966278730157 usec\nrounds: 124018"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 681951.5483520195,
            "unit": "iter/sec",
            "range": "stddev: 2.330096457214243e-7",
            "extra": "mean: 1.46637983653907 usec\nrounds: 126531"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 576110.7027326238,
            "unit": "iter/sec",
            "range": "stddev: 2.2256901390303467e-7",
            "extra": "mean: 1.7357775081364972 usec\nrounds: 113648"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 905825.549138271,
            "unit": "iter/sec",
            "range": "stddev: 1.7104291690795533e-7",
            "extra": "mean: 1.103965328590388 usec\nrounds: 34577"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 874449.9618349244,
            "unit": "iter/sec",
            "range": "stddev: 1.8839486079890568e-7",
            "extra": "mean: 1.1435760119442677 usec\nrounds: 121492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 771010.9142130842,
            "unit": "iter/sec",
            "range": "stddev: 2.0530787040541388e-7",
            "extra": "mean: 1.2969985010142542 usec\nrounds: 124046"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 681845.6520216324,
            "unit": "iter/sec",
            "range": "stddev: 2.090729096052215e-7",
            "extra": "mean: 1.466607577587477 usec\nrounds: 117916"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 575727.388704872,
            "unit": "iter/sec",
            "range": "stddev: 2.327397366630142e-7",
            "extra": "mean: 1.7369331729198272 usec\nrounds: 126621"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 787077.2592757912,
            "unit": "iter/sec",
            "range": "stddev: 1.1199589306387654e-7",
            "extra": "mean: 1.2705233040529262 usec\nrounds: 3626"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 818014.25963372,
            "unit": "iter/sec",
            "range": "stddev: 1.0759294740691497e-7",
            "extra": "mean: 1.2224725770034464 usec\nrounds: 190583"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 774111.5712497017,
            "unit": "iter/sec",
            "range": "stddev: 2.1409932357161282e-7",
            "extra": "mean: 1.2918034520342216 usec\nrounds: 79833"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 805567.5090902225,
            "unit": "iter/sec",
            "range": "stddev: 1.0041026514440225e-7",
            "extra": "mean: 1.2413608899511874 usec\nrounds: 186220"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 819324.6657276849,
            "unit": "iter/sec",
            "range": "stddev: 1.0174396308426391e-7",
            "extra": "mean: 1.220517386855244 usec\nrounds: 189106"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 774408.6215893787,
            "unit": "iter/sec",
            "range": "stddev: 2.0231414778333493e-7",
            "extra": "mean: 1.2913079375945256 usec\nrounds: 19735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 812879.3755511943,
            "unit": "iter/sec",
            "range": "stddev: 1.0883744563069804e-7",
            "extra": "mean: 1.2301948235824332 usec\nrounds: 185512"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 814279.3223381883,
            "unit": "iter/sec",
            "range": "stddev: 1.1635868350580836e-7",
            "extra": "mean: 1.2280798155705563 usec\nrounds: 179616"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 819338.1805841487,
            "unit": "iter/sec",
            "range": "stddev: 1.0315419309037127e-7",
            "extra": "mean: 1.2204972546098707 usec\nrounds: 187325"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 805554.0366733805,
            "unit": "iter/sec",
            "range": "stddev: 9.896758590670318e-8",
            "extra": "mean: 1.2413816509809874 usec\nrounds: 190583"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 762324.3756628234,
            "unit": "iter/sec",
            "range": "stddev: 1.5181471413064433e-7",
            "extra": "mean: 1.3117775476227205 usec\nrounds: 27456"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 780772.9089730082,
            "unit": "iter/sec",
            "range": "stddev: 1.1434999145194096e-7",
            "extra": "mean: 1.2807821435753357 usec\nrounds: 171470"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 793115.3458502507,
            "unit": "iter/sec",
            "range": "stddev: 1.099741987811042e-7",
            "extra": "mean: 1.2608506508318293 usec\nrounds: 172130"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 792354.9715244422,
            "unit": "iter/sec",
            "range": "stddev: 1.114875367758312e-7",
            "extra": "mean: 1.2620606116423574 usec\nrounds: 174536"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 789830.9431400792,
            "unit": "iter/sec",
            "range": "stddev: 1.0601207136489805e-7",
            "extra": "mean: 1.2660937238345784 usec\nrounds: 175563"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 752668.6122179929,
            "unit": "iter/sec",
            "range": "stddev: 2.961256084418753e-7",
            "extra": "mean: 1.3286059545556994 usec\nrounds: 27400"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 792271.6880116694,
            "unit": "iter/sec",
            "range": "stddev: 9.847854180642352e-8",
            "extra": "mean: 1.262193279315152 usec\nrounds: 187849"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 763643.490628204,
            "unit": "iter/sec",
            "range": "stddev: 2.2740490776175735e-7",
            "extra": "mean: 1.3095115878973311 usec\nrounds: 196585"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 796619.0163797088,
            "unit": "iter/sec",
            "range": "stddev: 1.06587902560359e-7",
            "extra": "mean: 1.2553052079331102 usec\nrounds: 188509"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 796687.4507371758,
            "unit": "iter/sec",
            "range": "stddev: 1.1525436817030914e-7",
            "extra": "mean: 1.255197378940385 usec\nrounds: 183797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 728985.8314243054,
            "unit": "iter/sec",
            "range": "stddev: 3.308577660886881e-7",
            "extra": "mean: 1.3717687736758646 usec\nrounds: 24646"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 749032.1499441972,
            "unit": "iter/sec",
            "range": "stddev: 1.1150519883213309e-7",
            "extra": "mean: 1.3350561789297026 usec\nrounds: 172185"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 717850.9246184696,
            "unit": "iter/sec",
            "range": "stddev: 2.3684243722716086e-7",
            "extra": "mean: 1.3930468927535196 usec\nrounds: 190718"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 719041.0839138806,
            "unit": "iter/sec",
            "range": "stddev: 2.3720640474112595e-7",
            "extra": "mean: 1.3907411167061627 usec\nrounds: 187849"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 747296.9157998948,
            "unit": "iter/sec",
            "range": "stddev: 1.0951973640565744e-7",
            "extra": "mean: 1.3381561985032626 usec\nrounds: 163481"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 71575.20971504977,
            "unit": "iter/sec",
            "range": "stddev: 0.000004220464400344031",
            "extra": "mean: 13.97131777861539 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58021.486662056166,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010209832862603754",
            "extra": "mean: 17.23499443963682 usec\nrounds: 17491"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jerevoss@gmail.com",
            "name": "Jeremy Voss",
            "username": "jeremydvoss"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18c0cb4c0de9af5ab9783d6c7770e57b448c3bf2",
          "message": "Improve Resource Detector timeout messaging (#3645)",
          "timestamp": "2024-01-24T10:11:30-08:00",
          "tree_id": "7eda395ced4c5e158072fcaeeb311f976d48b89b",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18c0cb4c0de9af5ab9783d6c7770e57b448c3bf2"
        },
        "date": 1706123920076,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 907023.5213649302,
            "unit": "iter/sec",
            "range": "stddev: 1.1492191278364124e-7",
            "extra": "mean: 1.102507240931475 usec\nrounds: 31564"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 861627.1359726439,
            "unit": "iter/sec",
            "range": "stddev: 1.2905616324555022e-7",
            "extra": "mean: 1.1605948306991916 usec\nrounds: 97472"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 771089.6415790381,
            "unit": "iter/sec",
            "range": "stddev: 1.2835053590066656e-7",
            "extra": "mean: 1.2968660789583413 usec\nrounds: 111385"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 674136.5931873663,
            "unit": "iter/sec",
            "range": "stddev: 1.461312367403863e-7",
            "extra": "mean: 1.483378902889588 usec\nrounds: 122911"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 565666.6760153334,
            "unit": "iter/sec",
            "range": "stddev: 1.3735192635780963e-7",
            "extra": "mean: 1.767825545326791 usec\nrounds: 118358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 916926.5347903499,
            "unit": "iter/sec",
            "range": "stddev: 1.376692445785221e-7",
            "extra": "mean: 1.0905999140145337 usec\nrounds: 54923"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 871595.8251411285,
            "unit": "iter/sec",
            "range": "stddev: 1.2435747896681613e-7",
            "extra": "mean: 1.1473207777677001 usec\nrounds: 133984"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 776627.6199896135,
            "unit": "iter/sec",
            "range": "stddev: 1.0549405232252862e-7",
            "extra": "mean: 1.287618382685609 usec\nrounds: 120591"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 657350.2355425461,
            "unit": "iter/sec",
            "range": "stddev: 1.2082748293740652e-7",
            "extra": "mean: 1.5212590578516287 usec\nrounds: 130881"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 570663.864680535,
            "unit": "iter/sec",
            "range": "stddev: 1.2524215844865387e-7",
            "extra": "mean: 1.752345052651639 usec\nrounds: 111639"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 920506.1926028316,
            "unit": "iter/sec",
            "range": "stddev: 8.37811035928094e-8",
            "extra": "mean: 1.0863587969706003 usec\nrounds: 35664"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 872543.7698344372,
            "unit": "iter/sec",
            "range": "stddev: 1.292496004660135e-7",
            "extra": "mean: 1.1460743111944371 usec\nrounds: 122911"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 780870.4258593968,
            "unit": "iter/sec",
            "range": "stddev: 1.5982754772494166e-7",
            "extra": "mean: 1.2806221965692162 usec\nrounds: 135403"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 680946.5549639357,
            "unit": "iter/sec",
            "range": "stddev: 1.4428122522681193e-7",
            "extra": "mean: 1.4685440328763568 usec\nrounds: 119305"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 567181.5719943143,
            "unit": "iter/sec",
            "range": "stddev: 1.5231867913521314e-7",
            "extra": "mean: 1.7631038266702086 usec\nrounds: 125145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 781527.4492342706,
            "unit": "iter/sec",
            "range": "stddev: 2.3360447501333384e-7",
            "extra": "mean: 1.2795455885519897 usec\nrounds: 3903"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 817972.816552436,
            "unit": "iter/sec",
            "range": "stddev: 6.298023279319574e-8",
            "extra": "mean: 1.2225345143066808 usec\nrounds: 189909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 782216.6820628662,
            "unit": "iter/sec",
            "range": "stddev: 1.669215333038543e-7",
            "extra": "mean: 1.278418145420773 usec\nrounds: 147290"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 817219.7523987994,
            "unit": "iter/sec",
            "range": "stddev: 6.227060743668887e-8",
            "extra": "mean: 1.2236610741048322 usec\nrounds: 186026"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 820550.9723958776,
            "unit": "iter/sec",
            "range": "stddev: 6.150518482601999e-8",
            "extra": "mean: 1.2186933336757375 usec\nrounds: 192152"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 784152.8067645613,
            "unit": "iter/sec",
            "range": "stddev: 1.4177226066461193e-7",
            "extra": "mean: 1.2752616471858729 usec\nrounds: 20655"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 814269.1071366022,
            "unit": "iter/sec",
            "range": "stddev: 6.652665681256974e-8",
            "extra": "mean: 1.2280952221269024 usec\nrounds: 188774"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 803326.7499311314,
            "unit": "iter/sec",
            "range": "stddev: 7.065421623453242e-8",
            "extra": "mean: 1.244823479469256 usec\nrounds: 187586"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 818097.3491980198,
            "unit": "iter/sec",
            "range": "stddev: 6.177599186712665e-8",
            "extra": "mean: 1.222348417312804 usec\nrounds: 192290"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 781687.8947885142,
            "unit": "iter/sec",
            "range": "stddev: 1.571070005140904e-7",
            "extra": "mean: 1.279282955085994 usec\nrounds: 185769"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 742708.4873818258,
            "unit": "iter/sec",
            "range": "stddev: 2.0992023158283957e-7",
            "extra": "mean: 1.3464232831446032 usec\nrounds: 28712"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 778905.2650299161,
            "unit": "iter/sec",
            "range": "stddev: 6.907124286694129e-8",
            "extra": "mean: 1.2838531781674272 usec\nrounds: 179736"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 777613.3782196289,
            "unit": "iter/sec",
            "range": "stddev: 6.268436598550459e-8",
            "extra": "mean: 1.2859861057040098 usec\nrounds: 173577"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 777808.3089926816,
            "unit": "iter/sec",
            "range": "stddev: 7.414939700627128e-8",
            "extra": "mean: 1.2856638177278834 usec\nrounds: 181683"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 745952.711373013,
            "unit": "iter/sec",
            "range": "stddev: 1.5027171068060798e-7",
            "extra": "mean: 1.3405675517411597 usec\nrounds: 186155"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 767770.1588582966,
            "unit": "iter/sec",
            "range": "stddev: 1.1400498179878517e-7",
            "extra": "mean: 1.3024731274878383 usec\nrounds: 29288"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 793732.9085561767,
            "unit": "iter/sec",
            "range": "stddev: 6.237427392448558e-8",
            "extra": "mean: 1.2598696478630693 usec\nrounds: 187194"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 795077.9113777267,
            "unit": "iter/sec",
            "range": "stddev: 6.727812077242037e-8",
            "extra": "mean: 1.2577383746797597 usec\nrounds: 187325"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 762471.0610806446,
            "unit": "iter/sec",
            "range": "stddev: 1.484570116286277e-7",
            "extra": "mean: 1.311525185733223 usec\nrounds: 198108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 793492.7355050723,
            "unit": "iter/sec",
            "range": "stddev: 6.766186310406718e-8",
            "extra": "mean: 1.2602509830962498 usec\nrounds: 189574"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 730416.4047558641,
            "unit": "iter/sec",
            "range": "stddev: 1.641628308900623e-7",
            "extra": "mean: 1.369082065365498 usec\nrounds: 26110"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 750581.6913484106,
            "unit": "iter/sec",
            "range": "stddev: 6.183330671054165e-8",
            "extra": "mean: 1.33230001680898 usec\nrounds: 175621"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 746336.2502378457,
            "unit": "iter/sec",
            "range": "stddev: 6.966194892129707e-8",
            "extra": "mean: 1.339878640065139 usec\nrounds: 171361"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 719021.2972659334,
            "unit": "iter/sec",
            "range": "stddev: 1.575238377922685e-7",
            "extra": "mean: 1.3907793883192106 usec\nrounds: 193259"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 745598.0178769915,
            "unit": "iter/sec",
            "range": "stddev: 8.147744059968138e-8",
            "extra": "mean: 1.3412052822342395 usec\nrounds: 170166"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 70969.15596859477,
            "unit": "iter/sec",
            "range": "stddev: 0.000003954253409838735",
            "extra": "mean: 14.090628334970186 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57428.65151346386,
            "unit": "iter/sec",
            "range": "stddev: 7.409813680852594e-7",
            "extra": "mean: 17.41291104085136 usec\nrounds: 18361"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "code@musicinmybrain.net",
            "name": "Ben Beasley",
            "username": "musicinmybrain"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b262d3d784fcd0b005fedbc2d3b0a95eaaf2eb1",
          "message": "Remove useless shebang lines (#3650)\n\nThese files do not have the executable bit set in their filesystem\r\npermissions, so the shebang lines are not useful.\r\n\r\nFixes #3643.",
          "timestamp": "2024-01-25T13:42:04-06:00",
          "tree_id": "69bd94a7c2ec8cbd11eae73727fd7ce944157d36",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8b262d3d784fcd0b005fedbc2d3b0a95eaaf2eb1"
        },
        "date": 1706211783139,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 929081.874762512,
            "unit": "iter/sec",
            "range": "stddev: 1.1167330738217528e-7",
            "extra": "mean: 1.0763314054055955 usec\nrounds: 32495"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 878922.2611512892,
            "unit": "iter/sec",
            "range": "stddev: 9.686616458265339e-8",
            "extra": "mean: 1.137757051107242 usec\nrounds: 87624"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 776157.0464254258,
            "unit": "iter/sec",
            "range": "stddev: 1.5543125500150077e-7",
            "extra": "mean: 1.2883990483697572 usec\nrounds: 115631"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 685029.240538835,
            "unit": "iter/sec",
            "range": "stddev: 1.47336293598796e-7",
            "extra": "mean: 1.4597917005899095 usec\nrounds: 118777"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 572477.4736157155,
            "unit": "iter/sec",
            "range": "stddev: 2.125047451768114e-7",
            "extra": "mean: 1.7467936226103207 usec\nrounds: 110083"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 925991.2473767463,
            "unit": "iter/sec",
            "range": "stddev: 7.614344448627533e-8",
            "extra": "mean: 1.079923814434439 usec\nrounds: 51317"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 870668.5470045625,
            "unit": "iter/sec",
            "range": "stddev: 1.235702604421446e-7",
            "extra": "mean: 1.1485426956565594 usec\nrounds: 131201"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 773794.7927995023,
            "unit": "iter/sec",
            "range": "stddev: 1.6249548709915285e-7",
            "extra": "mean: 1.2923322944344364 usec\nrounds: 129931"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 683265.7493552341,
            "unit": "iter/sec",
            "range": "stddev: 1.6275188677027375e-7",
            "extra": "mean: 1.4635593851201427 usec\nrounds: 137766"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 573069.463426002,
            "unit": "iter/sec",
            "range": "stddev: 1.690595928260428e-7",
            "extra": "mean: 1.744989157198612 usec\nrounds: 130341"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 928223.9299904968,
            "unit": "iter/sec",
            "range": "stddev: 7.887774826336306e-8",
            "extra": "mean: 1.0773262439056468 usec\nrounds: 37575"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 884836.1153019683,
            "unit": "iter/sec",
            "range": "stddev: 1.3436869690135194e-7",
            "extra": "mean: 1.1301527850258797 usec\nrounds: 135745"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 786898.3415367478,
            "unit": "iter/sec",
            "range": "stddev: 1.262673397570442e-7",
            "extra": "mean: 1.2708121840072533 usec\nrounds: 128346"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 691868.8365659239,
            "unit": "iter/sec",
            "range": "stddev: 1.8519558785942377e-7",
            "extra": "mean: 1.445360662525976 usec\nrounds: 125614"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 578863.5847678605,
            "unit": "iter/sec",
            "range": "stddev: 1.7304278962021245e-7",
            "extra": "mean: 1.7275227295581674 usec\nrounds: 120321"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 781561.7629603543,
            "unit": "iter/sec",
            "range": "stddev: 1.1639254195023167e-7",
            "extra": "mean: 1.2794894113195328 usec\nrounds: 3894"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 808937.3817367458,
            "unit": "iter/sec",
            "range": "stddev: 7.127673267867979e-8",
            "extra": "mean: 1.2361896267583197 usec\nrounds: 179857"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 771691.3688686847,
            "unit": "iter/sec",
            "range": "stddev: 1.9235581437535618e-7",
            "extra": "mean: 1.2958548460455381 usec\nrounds: 147940"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 812396.6470126826,
            "unit": "iter/sec",
            "range": "stddev: 8.267951937729955e-8",
            "extra": "mean: 1.2309258090578858 usec\nrounds: 184492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 811772.397423708,
            "unit": "iter/sec",
            "range": "stddev: 7.598648773209331e-8",
            "extra": "mean: 1.231872385872768 usec\nrounds: 184049"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 786618.8131073499,
            "unit": "iter/sec",
            "range": "stddev: 1.5294115561430453e-7",
            "extra": "mean: 1.2712637726648548 usec\nrounds: 19489"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 821071.0518827364,
            "unit": "iter/sec",
            "range": "stddev: 7.00746436323094e-8",
            "extra": "mean: 1.2179213939000468 usec\nrounds: 175449"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 823361.7046122928,
            "unit": "iter/sec",
            "range": "stddev: 7.572941566225136e-8",
            "extra": "mean: 1.2145330471386 usec\nrounds: 193328"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 827364.6201717033,
            "unit": "iter/sec",
            "range": "stddev: 7.433446100714663e-8",
            "extra": "mean: 1.2086569519886765 usec\nrounds: 192496"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 810688.1952033106,
            "unit": "iter/sec",
            "range": "stddev: 8.086198363511064e-8",
            "extra": "mean: 1.2335198735060062 usec\nrounds: 189641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 766797.8497186642,
            "unit": "iter/sec",
            "range": "stddev: 2.0107055897543996e-7",
            "extra": "mean: 1.304124679492642 usec\nrounds: 30790"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 798331.2557395485,
            "unit": "iter/sec",
            "range": "stddev: 7.574974810685178e-8",
            "extra": "mean: 1.2526128631574522 usec\nrounds: 182921"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 805235.1628115991,
            "unit": "iter/sec",
            "range": "stddev: 7.16164794005404e-8",
            "extra": "mean: 1.2418732392514384 usec\nrounds: 181070"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 806541.6870684039,
            "unit": "iter/sec",
            "range": "stddev: 7.634008992630699e-8",
            "extra": "mean: 1.2398615174310124 usec\nrounds: 175449"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 804675.9434261349,
            "unit": "iter/sec",
            "range": "stddev: 7.113667162101946e-8",
            "extra": "mean: 1.2427362942431432 usec\nrounds: 183923"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 765014.193802814,
            "unit": "iter/sec",
            "range": "stddev: 1.3977249179449003e-7",
            "extra": "mean: 1.3071652893511603 usec\nrounds: 28152"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 803044.3533258354,
            "unit": "iter/sec",
            "range": "stddev: 6.892143116300911e-8",
            "extra": "mean: 1.2452612310371975 usec\nrounds: 187783"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 798910.8923572111,
            "unit": "iter/sec",
            "range": "stddev: 1.270289197106822e-7",
            "extra": "mean: 1.2517040505599684 usec\nrounds: 184683"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 757281.2309103935,
            "unit": "iter/sec",
            "range": "stddev: 1.4930982390084905e-7",
            "extra": "mean: 1.3205133828522506 usec\nrounds: 153261"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 806391.641048339,
            "unit": "iter/sec",
            "range": "stddev: 7.208989398063538e-8",
            "extra": "mean: 1.2400922195819926 usec\nrounds: 179017"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 725134.7580120855,
            "unit": "iter/sec",
            "range": "stddev: 1.5469241366947045e-7",
            "extra": "mean: 1.3790540157548667 usec\nrounds: 23942"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 750067.0772946494,
            "unit": "iter/sec",
            "range": "stddev: 6.539795858380675e-8",
            "extra": "mean: 1.3332140954737162 usec\nrounds: 170707"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 714449.0618190308,
            "unit": "iter/sec",
            "range": "stddev: 1.480637055747027e-7",
            "extra": "mean: 1.3996799120345111 usec\nrounds: 197597"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 723391.5248218498,
            "unit": "iter/sec",
            "range": "stddev: 1.5182751120975826e-7",
            "extra": "mean: 1.3823772683074644 usec\nrounds: 197452"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 747151.580173911,
            "unit": "iter/sec",
            "range": "stddev: 8.779021244682122e-8",
            "extra": "mean: 1.338416496110782 usec\nrounds: 167250"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 70958.07054658182,
            "unit": "iter/sec",
            "range": "stddev: 0.000004032082099588738",
            "extra": "mean: 14.092829642873822 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57996.40716992807,
            "unit": "iter/sec",
            "range": "stddev: 6.107095908848393e-7",
            "extra": "mean: 17.24244739971606 usec\nrounds: 22892"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "code@musicinmybrain.net",
            "name": "Ben Beasley",
            "username": "musicinmybrain"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b262d3d784fcd0b005fedbc2d3b0a95eaaf2eb1",
          "message": "Remove useless shebang lines (#3650)\n\nThese files do not have the executable bit set in their filesystem\r\npermissions, so the shebang lines are not useful.\r\n\r\nFixes #3643.",
          "timestamp": "2024-01-25T13:42:04-06:00",
          "tree_id": "69bd94a7c2ec8cbd11eae73727fd7ce944157d36",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8b262d3d784fcd0b005fedbc2d3b0a95eaaf2eb1"
        },
        "date": 1706211852203,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 909503.5211244732,
            "unit": "iter/sec",
            "range": "stddev: 1.2237290124341447e-7",
            "extra": "mean: 1.0995009659375927 usec\nrounds: 32087"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 857803.7418523377,
            "unit": "iter/sec",
            "range": "stddev: 4.865426003440695e-7",
            "extra": "mean: 1.1657678221834336 usec\nrounds: 93695"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 762122.7097283192,
            "unit": "iter/sec",
            "range": "stddev: 1.1420512074496388e-7",
            "extra": "mean: 1.312124658188547 usec\nrounds: 120187"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 674290.8622991788,
            "unit": "iter/sec",
            "range": "stddev: 1.2390783248678422e-7",
            "extra": "mean: 1.4830395247982853 usec\nrounds: 112246"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 559926.477123213,
            "unit": "iter/sec",
            "range": "stddev: 1.6511282997637265e-7",
            "extra": "mean: 1.7859487644481364 usec\nrounds: 111361"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 907526.2107163956,
            "unit": "iter/sec",
            "range": "stddev: 6.980398730246342e-8",
            "extra": "mean: 1.1018965493135522 usec\nrounds: 54071"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 853166.4139767804,
            "unit": "iter/sec",
            "range": "stddev: 1.0143610545678117e-7",
            "extra": "mean: 1.1721042737006004 usec\nrounds: 133451"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 769922.5709058616,
            "unit": "iter/sec",
            "range": "stddev: 4.4818022047915334e-7",
            "extra": "mean: 1.2988319056855784 usec\nrounds: 124247"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 680212.3542549706,
            "unit": "iter/sec",
            "range": "stddev: 1.30827283385089e-7",
            "extra": "mean: 1.470129135033558 usec\nrounds: 126383"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 564772.1008111058,
            "unit": "iter/sec",
            "range": "stddev: 1.750879096730824e-7",
            "extra": "mean: 1.770625706482022 usec\nrounds: 120836"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 918801.137512127,
            "unit": "iter/sec",
            "range": "stddev: 1.3234563293929572e-7",
            "extra": "mean: 1.0883747953422633 usec\nrounds: 35840"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 872751.0203340809,
            "unit": "iter/sec",
            "range": "stddev: 9.794734168536153e-8",
            "extra": "mean: 1.14580215514066 usec\nrounds: 132528"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 779744.4545202996,
            "unit": "iter/sec",
            "range": "stddev: 4.3356398125982287e-7",
            "extra": "mean: 1.282471448437812 usec\nrounds: 130088"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 687312.8732229308,
            "unit": "iter/sec",
            "range": "stddev: 1.252802047096021e-7",
            "extra": "mean: 1.4549414669200424 usec\nrounds: 116231"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 572614.6595750471,
            "unit": "iter/sec",
            "range": "stddev: 1.208650351734362e-7",
            "extra": "mean: 1.7463751290302751 usec\nrounds: 121218"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 790778.5178209811,
            "unit": "iter/sec",
            "range": "stddev: 1.0078362902133287e-7",
            "extra": "mean: 1.2645765880888322 usec\nrounds: 3983"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 782509.9173522523,
            "unit": "iter/sec",
            "range": "stddev: 1.4300066705846108e-7",
            "extra": "mean: 1.277939075051803 usec\nrounds: 179196"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 781455.2748354181,
            "unit": "iter/sec",
            "range": "stddev: 4.187432081220319e-7",
            "extra": "mean: 1.2796637660557215 usec\nrounds: 161368"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 819185.9070651146,
            "unit": "iter/sec",
            "range": "stddev: 1.1633943441484939e-7",
            "extra": "mean: 1.2207241254707195 usec\nrounds: 189574"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 783094.6928638965,
            "unit": "iter/sec",
            "range": "stddev: 2.0070771245994105e-7",
            "extra": "mean: 1.276984774782278 usec\nrounds: 172794"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 780702.0058698356,
            "unit": "iter/sec",
            "range": "stddev: 2.6384428143247954e-7",
            "extra": "mean: 1.2808984637945546 usec\nrounds: 17400"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 814682.3798541696,
            "unit": "iter/sec",
            "range": "stddev: 1.3151278941571588e-7",
            "extra": "mean: 1.2274722330179804 usec\nrounds: 185065"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 824709.6868641496,
            "unit": "iter/sec",
            "range": "stddev: 1.0259243205104027e-7",
            "extra": "mean: 1.2125479013134535 usec\nrounds: 189306"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 785413.2770055583,
            "unit": "iter/sec",
            "range": "stddev: 1.624532573750211e-7",
            "extra": "mean: 1.2732150439480323 usec\nrounds: 193537"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 775752.7932918109,
            "unit": "iter/sec",
            "range": "stddev: 1.720197420546775e-7",
            "extra": "mean: 1.2890704469868859 usec\nrounds: 197962"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 753680.0265359482,
            "unit": "iter/sec",
            "range": "stddev: 8.856660770384646e-7",
            "extra": "mean: 1.3268230081619434 usec\nrounds: 29013"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 800757.1573647817,
            "unit": "iter/sec",
            "range": "stddev: 6.125847313532484e-8",
            "extra": "mean: 1.2488180602605017 usec\nrounds: 181560"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 764785.3486222578,
            "unit": "iter/sec",
            "range": "stddev: 3.524963394380118e-7",
            "extra": "mean: 1.3075564297897124 usec\nrounds: 195867"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 800841.4549383839,
            "unit": "iter/sec",
            "range": "stddev: 1.1150210003700756e-7",
            "extra": "mean: 1.248686608108891 usec\nrounds: 186544"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 795157.5680814172,
            "unit": "iter/sec",
            "range": "stddev: 1.1012361273590954e-7",
            "extra": "mean: 1.2576123778999344 usec\nrounds: 186608"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 755830.4825703895,
            "unit": "iter/sec",
            "range": "stddev: 9.371062816614943e-8",
            "extra": "mean: 1.323047989013689 usec\nrounds: 29613"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 795080.2571942504,
            "unit": "iter/sec",
            "range": "stddev: 1.0119904849152261e-7",
            "extra": "mean: 1.257734663829899 usec\nrounds: 186285"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 793629.699896993,
            "unit": "iter/sec",
            "range": "stddev: 1.0006388493202168e-7",
            "extra": "mean: 1.2600334893336178 usec\nrounds: 182610"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 767141.1219478598,
            "unit": "iter/sec",
            "range": "stddev: 1.490280549458344e-7",
            "extra": "mean: 1.3035411235169934 usec\nrounds: 193607"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 798284.1988011976,
            "unit": "iter/sec",
            "range": "stddev: 1.0526277310147688e-7",
            "extra": "mean: 1.2526867016805843 usec\nrounds: 186220"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 722675.0947450822,
            "unit": "iter/sec",
            "range": "stddev: 3.704772827273288e-7",
            "extra": "mean: 1.3837476997221578 usec\nrounds: 25219"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 714769.8731422109,
            "unit": "iter/sec",
            "range": "stddev: 4.579097907907092e-7",
            "extra": "mean: 1.3990516914260593 usec\nrounds: 189574"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 718847.3806910124,
            "unit": "iter/sec",
            "range": "stddev: 2.2113420823730683e-7",
            "extra": "mean: 1.3911158708524773 usec\nrounds: 147858"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 711559.0607301033,
            "unit": "iter/sec",
            "range": "stddev: 1.6902693080175698e-7",
            "extra": "mean: 1.40536471979422 usec\nrounds: 185320"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 716893.7036484157,
            "unit": "iter/sec",
            "range": "stddev: 1.6298361025131657e-7",
            "extra": "mean: 1.3949069365664668 usec\nrounds: 190515"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 68749.75898278019,
            "unit": "iter/sec",
            "range": "stddev: 0.000005055984340186471",
            "extra": "mean: 14.545505537706262 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58476.7634774141,
            "unit": "iter/sec",
            "range": "stddev: 8.483173307377696e-7",
            "extra": "mean: 17.100809629900894 usec\nrounds: 18546"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "code@musicinmybrain.net",
            "name": "Ben Beasley",
            "username": "musicinmybrain"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "373ed5175cea87951aa6b8f0922284357828bb99",
          "message": "Don’t pin an exact version of responses for testing (#3642)\n\n* Don’t pin an exact version of responses for testing\r\n\r\nIn the test dependencies for opentelemetry-exporter-otlp-proto-http,\r\nallow `responses >= 0.22.0` rather than `responses == 0.22.0`.\r\n\r\nThese tests use responses in a very straightforward way, and it’s\r\nunlikely that they will be affected by any future breaking changes;\r\nmeanwhile, allowing newer versions helps with compatibility with newer\r\nPython interpreter versions and makes distribution packagers’ lives\r\neasier.\r\n\r\n* Upper-bound responses test dependency to the current minor release\r\n\r\nAs requested in:\r\n\r\nhttps://github.com/open-telemetry/opentelemetry-python/pull/3642#issuecomment-1904877072\r\n\r\n---------\r\n\r\nCo-authored-by: Diego Hurtado <ocelotl@users.noreply.github.com>",
          "timestamp": "2024-01-25T14:00:06-06:00",
          "tree_id": "58b1e45f7efe446d36b3a82cd2f08d6d2108365e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/373ed5175cea87951aa6b8f0922284357828bb99"
        },
        "date": 1706212862051,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 919080.4757835576,
            "unit": "iter/sec",
            "range": "stddev: 3.189750053243143e-7",
            "extra": "mean: 1.0880440030536551 usec\nrounds: 32290"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 874276.2674943219,
            "unit": "iter/sec",
            "range": "stddev: 2.2673677506642377e-7",
            "extra": "mean: 1.1438032086425067 usec\nrounds: 95056"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 787239.5500876687,
            "unit": "iter/sec",
            "range": "stddev: 2.370603050327331e-7",
            "extra": "mean: 1.2702613834488343 usec\nrounds: 117813"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 687545.1454602471,
            "unit": "iter/sec",
            "range": "stddev: 2.4552815879869324e-7",
            "extra": "mean: 1.454449946454925 usec\nrounds: 115209"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 568043.6787495323,
            "unit": "iter/sec",
            "range": "stddev: 2.91078293480902e-7",
            "extra": "mean: 1.7604280047642786 usec\nrounds: 108591"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 928142.2800598384,
            "unit": "iter/sec",
            "range": "stddev: 1.8006410570454086e-7",
            "extra": "mean: 1.0774210177512102 usec\nrounds: 50816"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 875758.3579553503,
            "unit": "iter/sec",
            "range": "stddev: 2.0275559962322275e-7",
            "extra": "mean: 1.141867492232354 usec\nrounds: 138085"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 770602.4089174161,
            "unit": "iter/sec",
            "range": "stddev: 2.5107657777233043e-7",
            "extra": "mean: 1.2976860549980034 usec\nrounds: 133252"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 677098.7823846126,
            "unit": "iter/sec",
            "range": "stddev: 2.569198959329642e-7",
            "extra": "mean: 1.4768893786489927 usec\nrounds: 124767"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 563596.2834230366,
            "unit": "iter/sec",
            "range": "stddev: 2.637202337058896e-7",
            "extra": "mean: 1.7743197203616015 usec\nrounds: 125145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 938227.3878611281,
            "unit": "iter/sec",
            "range": "stddev: 1.5810188306656966e-7",
            "extra": "mean: 1.0658397025476891 usec\nrounds: 36884"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 883444.7433193693,
            "unit": "iter/sec",
            "range": "stddev: 1.9637531739178685e-7",
            "extra": "mean: 1.1319327072372374 usec\nrounds: 132561"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 789811.4341873468,
            "unit": "iter/sec",
            "range": "stddev: 2.2647728458730024e-7",
            "extra": "mean: 1.2661249973279007 usec\nrounds: 114058"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 685467.4068033936,
            "unit": "iter/sec",
            "range": "stddev: 2.688457572498778e-7",
            "extra": "mean: 1.4588585687296158 usec\nrounds: 125145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 574399.0206381861,
            "unit": "iter/sec",
            "range": "stddev: 2.4260600704788594e-7",
            "extra": "mean: 1.7409500435584826 usec\nrounds: 112012"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 787097.338804735,
            "unit": "iter/sec",
            "range": "stddev: 1.1733569355131128e-7",
            "extra": "mean: 1.2704908919125217 usec\nrounds: 3761"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 818770.368607349,
            "unit": "iter/sec",
            "range": "stddev: 1.092025362253388e-7",
            "extra": "mean: 1.2213436615945268 usec\nrounds: 192152"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 781452.0289814435,
            "unit": "iter/sec",
            "range": "stddev: 2.4367659239373045e-7",
            "extra": "mean: 1.27966908129142 usec\nrounds: 126383"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 815951.1438085347,
            "unit": "iter/sec",
            "range": "stddev: 1.1287182965909568e-7",
            "extra": "mean: 1.2255635739811561 usec\nrounds: 190651"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 817677.6784645396,
            "unit": "iter/sec",
            "range": "stddev: 1.1014538885446008e-7",
            "extra": "mean: 1.2229757841474052 usec\nrounds: 184366"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 784267.7295324951,
            "unit": "iter/sec",
            "range": "stddev: 2.0193954580139236e-7",
            "extra": "mean: 1.2750747765639978 usec\nrounds: 18543"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 815561.2996345819,
            "unit": "iter/sec",
            "range": "stddev: 1.0651724451139462e-7",
            "extra": "mean: 1.2261494021946078 usec\nrounds: 193120"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 817081.2731053574,
            "unit": "iter/sec",
            "range": "stddev: 1.0693195566285996e-7",
            "extra": "mean: 1.2238684607217236 usec\nrounds: 192083"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 819212.6094135306,
            "unit": "iter/sec",
            "range": "stddev: 1.128445686095569e-7",
            "extra": "mean: 1.2206843357988522 usec\nrounds: 188840"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 773161.2827530438,
            "unit": "iter/sec",
            "range": "stddev: 4.041409848940881e-7",
            "extra": "mean: 1.2933912009137827 usec\nrounds: 197452"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 729756.0158367046,
            "unit": "iter/sec",
            "range": "stddev: 9.106493328656323e-7",
            "extra": "mean: 1.3703210090751305 usec\nrounds: 26864"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 768933.9371711418,
            "unit": "iter/sec",
            "range": "stddev: 3.2246579981371926e-7",
            "extra": "mean: 1.3005018398315664 usec\nrounds: 173296"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 793673.2673499798,
            "unit": "iter/sec",
            "range": "stddev: 1.2107529669652293e-7",
            "extra": "mean: 1.2599643217654677 usec\nrounds: 180522"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 799210.8488544085,
            "unit": "iter/sec",
            "range": "stddev: 1.269310816896189e-7",
            "extra": "mean: 1.2512342661932123 usec\nrounds: 185898"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 766694.4564201916,
            "unit": "iter/sec",
            "range": "stddev: 2.4962411874571287e-7",
            "extra": "mean: 1.30430054844683 usec\nrounds: 197743"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 770053.3447109074,
            "unit": "iter/sec",
            "range": "stddev: 1.7282683947149498e-7",
            "extra": "mean: 1.2986113324076514 usec\nrounds: 27806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 800588.6836921016,
            "unit": "iter/sec",
            "range": "stddev: 1.3862323081654198e-7",
            "extra": "mean: 1.2490808580859107 usec\nrounds: 180643"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 804876.0707653274,
            "unit": "iter/sec",
            "range": "stddev: 1.069199124321152e-7",
            "extra": "mean: 1.2424272957315483 usec\nrounds: 183735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 800815.3773358628,
            "unit": "iter/sec",
            "range": "stddev: 1.4537235536971318e-7",
            "extra": "mean: 1.2487272701066015 usec\nrounds: 181991"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 803029.0933275246,
            "unit": "iter/sec",
            "range": "stddev: 1.4208916758123106e-7",
            "extra": "mean: 1.2452848947928947 usec\nrounds: 190178"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 735229.9261637317,
            "unit": "iter/sec",
            "range": "stddev: 2.109976424624839e-7",
            "extra": "mean: 1.3601187389335203 usec\nrounds: 24622"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 731593.091116914,
            "unit": "iter/sec",
            "range": "stddev: 2.882091178076979e-7",
            "extra": "mean: 1.36688004868022 usec\nrounds: 191398"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 753610.3287606102,
            "unit": "iter/sec",
            "range": "stddev: 1.1620456143310753e-7",
            "extra": "mean: 1.326945719606316 usec\nrounds: 173970"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 712605.8938490294,
            "unit": "iter/sec",
            "range": "stddev: 3.1432107382546807e-7",
            "extra": "mean: 1.4033002093185845 usec\nrounds: 196513"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 717689.5952493352,
            "unit": "iter/sec",
            "range": "stddev: 2.627432962262989e-7",
            "extra": "mean: 1.393360035619001 usec\nrounds: 177831"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 66949.35209670897,
            "unit": "iter/sec",
            "range": "stddev: 0.000007552582927247596",
            "extra": "mean: 14.936664339267846 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59029.688195665265,
            "unit": "iter/sec",
            "range": "stddev: 8.494009133647602e-7",
            "extra": "mean: 16.940628191788978 usec\nrounds: 23542"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "code@musicinmybrain.net",
            "name": "Ben Beasley",
            "username": "musicinmybrain"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "373ed5175cea87951aa6b8f0922284357828bb99",
          "message": "Don’t pin an exact version of responses for testing (#3642)\n\n* Don’t pin an exact version of responses for testing\r\n\r\nIn the test dependencies for opentelemetry-exporter-otlp-proto-http,\r\nallow `responses >= 0.22.0` rather than `responses == 0.22.0`.\r\n\r\nThese tests use responses in a very straightforward way, and it’s\r\nunlikely that they will be affected by any future breaking changes;\r\nmeanwhile, allowing newer versions helps with compatibility with newer\r\nPython interpreter versions and makes distribution packagers’ lives\r\neasier.\r\n\r\n* Upper-bound responses test dependency to the current minor release\r\n\r\nAs requested in:\r\n\r\nhttps://github.com/open-telemetry/opentelemetry-python/pull/3642#issuecomment-1904877072\r\n\r\n---------\r\n\r\nCo-authored-by: Diego Hurtado <ocelotl@users.noreply.github.com>",
          "timestamp": "2024-01-25T14:00:06-06:00",
          "tree_id": "58b1e45f7efe446d36b3a82cd2f08d6d2108365e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/373ed5175cea87951aa6b8f0922284357828bb99"
        },
        "date": 1706212926133,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 920662.1647187257,
            "unit": "iter/sec",
            "range": "stddev: 1.2285936696621584e-7",
            "extra": "mean: 1.0861747536953612 usec\nrounds: 33547"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 874403.4419468739,
            "unit": "iter/sec",
            "range": "stddev: 2.9728018028013057e-7",
            "extra": "mean: 1.1436368523132563 usec\nrounds: 97472"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 785042.9293860986,
            "unit": "iter/sec",
            "range": "stddev: 2.2903326049868506e-7",
            "extra": "mean: 1.2738156890120609 usec\nrounds: 109633"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 681409.4966055285,
            "unit": "iter/sec",
            "range": "stddev: 2.34861843566335e-7",
            "extra": "mean: 1.4675463212378812 usec\nrounds: 112883"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 575722.0700653967,
            "unit": "iter/sec",
            "range": "stddev: 2.3347016722002748e-7",
            "extra": "mean: 1.7369492190674733 usec\nrounds: 108701"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 914030.5063448806,
            "unit": "iter/sec",
            "range": "stddev: 2.1970008145211992e-7",
            "extra": "mean: 1.09405538771228 usec\nrounds: 50582"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 865155.7507385486,
            "unit": "iter/sec",
            "range": "stddev: 2.6882384561360053e-7",
            "extra": "mean: 1.1558612413387306 usec\nrounds: 131041"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 780611.8781976318,
            "unit": "iter/sec",
            "range": "stddev: 2.7122086963265663e-7",
            "extra": "mean: 1.2810463534181893 usec\nrounds: 115457"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 685028.0652140325,
            "unit": "iter/sec",
            "range": "stddev: 2.4407236941134456e-7",
            "extra": "mean: 1.4597942052017336 usec\nrounds: 123447"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 577519.743598557,
            "unit": "iter/sec",
            "range": "stddev: 2.4757463004145924e-7",
            "extra": "mean: 1.7315425335399712 usec\nrounds: 117942"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 932135.8819972951,
            "unit": "iter/sec",
            "range": "stddev: 1.4924394683340895e-7",
            "extra": "mean: 1.07280496257401 usec\nrounds: 35456"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 880681.8319527264,
            "unit": "iter/sec",
            "range": "stddev: 2.1167111778633252e-7",
            "extra": "mean: 1.135483853212585 usec\nrounds: 137836"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 791501.483206191,
            "unit": "iter/sec",
            "range": "stddev: 2.0315857309751804e-7",
            "extra": "mean: 1.2634215111628464 usec\nrounds: 126980"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 698213.1834372679,
            "unit": "iter/sec",
            "range": "stddev: 2.1888519884983315e-7",
            "extra": "mean: 1.432227325008461 usec\nrounds: 118437"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 581380.6399352791,
            "unit": "iter/sec",
            "range": "stddev: 2.812210928385699e-7",
            "extra": "mean: 1.720043515916393 usec\nrounds: 122518"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 775214.951949507,
            "unit": "iter/sec",
            "range": "stddev: 1.0808078168563542e-7",
            "extra": "mean: 1.2899647994213794 usec\nrounds: 3735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 812933.8491749213,
            "unit": "iter/sec",
            "range": "stddev: 1.0318788966731691e-7",
            "extra": "mean: 1.2301123898518183 usec\nrounds: 170761"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 759559.9433021991,
            "unit": "iter/sec",
            "range": "stddev: 2.5986862748046277e-7",
            "extra": "mean: 1.3165517860940426 usec\nrounds: 76326"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 766582.5693852792,
            "unit": "iter/sec",
            "range": "stddev: 2.643103006503197e-7",
            "extra": "mean: 1.3044909184432638 usec\nrounds: 174991"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 814709.246430353,
            "unit": "iter/sec",
            "range": "stddev: 1.0722756687268551e-7",
            "extra": "mean: 1.2274317548027078 usec\nrounds: 192358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 771180.3677283775,
            "unit": "iter/sec",
            "range": "stddev: 2.1644602791023105e-7",
            "extra": "mean: 1.296713508080663 usec\nrounds: 18687"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 814765.7403272269,
            "unit": "iter/sec",
            "range": "stddev: 1.1452484141453702e-7",
            "extra": "mean: 1.2273466476368766 usec\nrounds: 189842"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 815559.7409708193,
            "unit": "iter/sec",
            "range": "stddev: 1.0562758411404218e-7",
            "extra": "mean: 1.2261517455602067 usec\nrounds: 190515"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 770228.416099907,
            "unit": "iter/sec",
            "range": "stddev: 2.1007828056108862e-7",
            "extra": "mean: 1.2983161606313536 usec\nrounds: 193817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 813362.521306825,
            "unit": "iter/sec",
            "range": "stddev: 1.1043594592963914e-7",
            "extra": "mean: 1.2294640751252044 usec\nrounds: 191262"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 753629.326322667,
            "unit": "iter/sec",
            "range": "stddev: 2.2605454932867044e-7",
            "extra": "mean: 1.3269122698283229 usec\nrounds: 30444"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 789288.9668138286,
            "unit": "iter/sec",
            "range": "stddev: 1.206527155409295e-7",
            "extra": "mean: 1.2669631048268186 usec\nrounds: 186673"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 741411.2963208574,
            "unit": "iter/sec",
            "range": "stddev: 2.445494605801839e-7",
            "extra": "mean: 1.3487790177494603 usec\nrounds: 199507"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 747041.1425441288,
            "unit": "iter/sec",
            "range": "stddev: 2.1284963831332126e-7",
            "extra": "mean: 1.338614358767969 usec\nrounds: 186026"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 789476.1121176707,
            "unit": "iter/sec",
            "range": "stddev: 1.1469367799523994e-7",
            "extra": "mean: 1.266662771236517 usec\nrounds: 183358"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 748483.7788111992,
            "unit": "iter/sec",
            "range": "stddev: 2.1038674095608587e-7",
            "extra": "mean: 1.3360342980154876 usec\nrounds: 29649"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 788817.416435889,
            "unit": "iter/sec",
            "range": "stddev: 1.1139627781741104e-7",
            "extra": "mean: 1.2677204878643484 usec\nrounds: 168775"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 741836.2944516438,
            "unit": "iter/sec",
            "range": "stddev: 2.755558318646927e-7",
            "extra": "mean: 1.348006302036203 usec\nrounds: 199581"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 786877.2578952604,
            "unit": "iter/sec",
            "range": "stddev: 1.1230381612563406e-7",
            "extra": "mean: 1.2708462342332785 usec\nrounds: 186738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 744981.524061593,
            "unit": "iter/sec",
            "range": "stddev: 2.5534679890023254e-7",
            "extra": "mean: 1.3423151684998336 usec\nrounds: 198108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 712757.722954239,
            "unit": "iter/sec",
            "range": "stddev: 1.7996487885747513e-7",
            "extra": "mean: 1.4030012833185432 usec\nrounds: 25410"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 713188.3244726813,
            "unit": "iter/sec",
            "range": "stddev: 2.438307253098157e-7",
            "extra": "mean: 1.4021541936197317 usec\nrounds: 192427"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 702136.8131130661,
            "unit": "iter/sec",
            "range": "stddev: 2.509737835682811e-7",
            "extra": "mean: 1.4242238568382377 usec\nrounds: 197743"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 701322.1275914286,
            "unit": "iter/sec",
            "range": "stddev: 2.634696779823932e-7",
            "extra": "mean: 1.4258782956618377 usec\nrounds: 198474"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 702331.1901998486,
            "unit": "iter/sec",
            "range": "stddev: 2.422921184725562e-7",
            "extra": "mean: 1.4238296888330553 usec\nrounds: 173970"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 70216.72869391947,
            "unit": "iter/sec",
            "range": "stddev: 0.000004523524301427788",
            "extra": "mean: 14.241620459977318 usec\nrounds: 34"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59041.34800631643,
            "unit": "iter/sec",
            "range": "stddev: 9.778514975920164e-7",
            "extra": "mean: 16.93728266321116 usec\nrounds: 22204"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4bac02e97ebe6d1eecab1d8beaf9a93e4671c384",
          "message": "Add test context for no exception raised (#3630)\n\n* Add test context for no exception raised\r\n\r\nFixes #1891\r\n\r\n* Add missing test class",
          "timestamp": "2024-01-25T17:35:10-06:00",
          "tree_id": "b1d51d2ab0b40710ec7b634c4071e95c88c46521",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4bac02e97ebe6d1eecab1d8beaf9a93e4671c384"
        },
        "date": 1706230159589,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 897041.0817114066,
            "unit": "iter/sec",
            "range": "stddev: 1.4382727729840553e-7",
            "extra": "mean: 1.114776146140559 usec\nrounds: 32643"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 865932.5316704183,
            "unit": "iter/sec",
            "range": "stddev: 1.3974742830421234e-7",
            "extra": "mean: 1.1548243811454457 usec\nrounds: 101297"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 772627.4756469557,
            "unit": "iter/sec",
            "range": "stddev: 1.2778305052911588e-7",
            "extra": "mean: 1.2942848028574898 usec\nrounds: 115780"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 670055.967705338,
            "unit": "iter/sec",
            "range": "stddev: 1.8554665771209855e-7",
            "extra": "mean: 1.4924126464011394 usec\nrounds: 107655"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 567869.5450057364,
            "unit": "iter/sec",
            "range": "stddev: 4.169734651830847e-7",
            "extra": "mean: 1.7609678293099842 usec\nrounds: 99109"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 915080.62457406,
            "unit": "iter/sec",
            "range": "stddev: 9.372886425856025e-8",
            "extra": "mean: 1.0927998835790749 usec\nrounds: 53985"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 871098.3160278744,
            "unit": "iter/sec",
            "range": "stddev: 1.2447017977141767e-7",
            "extra": "mean: 1.147976045413456 usec\nrounds: 141097"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 761106.5937122257,
            "unit": "iter/sec",
            "range": "stddev: 1.3605030323116648e-7",
            "extra": "mean: 1.313876411348106 usec\nrounds: 123164"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 679216.3786052446,
            "unit": "iter/sec",
            "range": "stddev: 1.621100514792882e-7",
            "extra": "mean: 1.4722848734205694 usec\nrounds: 117581"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 567803.5410557715,
            "unit": "iter/sec",
            "range": "stddev: 3.9583288512125896e-7",
            "extra": "mean: 1.7611725318595306 usec\nrounds: 111732"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 932612.2675079425,
            "unit": "iter/sec",
            "range": "stddev: 1.2664382808359492e-7",
            "extra": "mean: 1.072256965557751 usec\nrounds: 37628"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 884226.4641700723,
            "unit": "iter/sec",
            "range": "stddev: 1.474767187146053e-7",
            "extra": "mean: 1.1309319959548958 usec\nrounds: 135198"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 785513.0264559736,
            "unit": "iter/sec",
            "range": "stddev: 1.461002613758305e-7",
            "extra": "mean: 1.273053362987161 usec\nrounds: 138120"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 694683.798555663,
            "unit": "iter/sec",
            "range": "stddev: 2.009759344028942e-7",
            "extra": "mean: 1.4395038463242251 usec\nrounds: 124854"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 577400.3572196427,
            "unit": "iter/sec",
            "range": "stddev: 1.94923749312777e-7",
            "extra": "mean: 1.7319005565138588 usec\nrounds: 123989"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 792216.7328590555,
            "unit": "iter/sec",
            "range": "stddev: 9.890122087576507e-8",
            "extra": "mean: 1.2622808361937383 usec\nrounds: 3992"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 786934.6233720466,
            "unit": "iter/sec",
            "range": "stddev: 1.531791346289881e-7",
            "extra": "mean: 1.2707535928651348 usec\nrounds: 188575"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 788801.5464552358,
            "unit": "iter/sec",
            "range": "stddev: 1.678248853931002e-7",
            "extra": "mean: 1.2677459932651762 usec\nrounds: 166834"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 820893.2363601191,
            "unit": "iter/sec",
            "range": "stddev: 7.356085137730488e-8",
            "extra": "mean: 1.218185210581158 usec\nrounds: 186868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 790845.5340060779,
            "unit": "iter/sec",
            "range": "stddev: 1.6511277468325445e-7",
            "extra": "mean: 1.264469427973421 usec\nrounds: 197017"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 781009.5181725067,
            "unit": "iter/sec",
            "range": "stddev: 1.6687836762845133e-7",
            "extra": "mean: 1.2803941267449745 usec\nrounds: 18326"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 807443.6233113728,
            "unit": "iter/sec",
            "range": "stddev: 1.3148703483469685e-7",
            "extra": "mean: 1.2384765587706823 usec\nrounds: 187586"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 780157.3589194553,
            "unit": "iter/sec",
            "range": "stddev: 3.822750650713241e-7",
            "extra": "mean: 1.281792690368305 usec\nrounds: 174422"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 772853.3461305943,
            "unit": "iter/sec",
            "range": "stddev: 4.2144949699961945e-7",
            "extra": "mean: 1.2939065412689865 usec\nrounds: 188774"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 788247.1921313205,
            "unit": "iter/sec",
            "range": "stddev: 1.971231413115384e-7",
            "extra": "mean: 1.268637566974551 usec\nrounds: 137378"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 762628.6568354311,
            "unit": "iter/sec",
            "range": "stddev: 2.3740270878831329e-7",
            "extra": "mean: 1.311254161559512 usec\nrounds: 27383"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 761547.1071152958,
            "unit": "iter/sec",
            "range": "stddev: 2.3860631094777645e-7",
            "extra": "mean: 1.313116405612717 usec\nrounds: 197017"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 764724.4305467218,
            "unit": "iter/sec",
            "range": "stddev: 2.394952938542298e-7",
            "extra": "mean: 1.307660589952741 usec\nrounds: 195155"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 803253.3041342797,
            "unit": "iter/sec",
            "range": "stddev: 8.123413546231646e-8",
            "extra": "mean: 1.2449373004170428 usec\nrounds: 183295"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 794842.9058573728,
            "unit": "iter/sec",
            "range": "stddev: 7.62654016761407e-8",
            "extra": "mean: 1.2581102411945546 usec\nrounds: 174820"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 752563.644943824,
            "unit": "iter/sec",
            "range": "stddev: 1.2793804232146095e-7",
            "extra": "mean: 1.328791267979263 usec\nrounds: 27947"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 767209.9708158594,
            "unit": "iter/sec",
            "range": "stddev: 1.7221904351390562e-7",
            "extra": "mean: 1.3034241446791799 usec\nrounds: 196082"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 800416.7947045846,
            "unit": "iter/sec",
            "range": "stddev: 8.747493637490617e-8",
            "extra": "mean: 1.2493490973900379 usec\nrounds: 182921"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 802611.1493117042,
            "unit": "iter/sec",
            "range": "stddev: 8.064818761824782e-8",
            "extra": "mean: 1.2459333524803022 usec\nrounds: 181192"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 802158.9663961477,
            "unit": "iter/sec",
            "range": "stddev: 7.960002161045023e-8",
            "extra": "mean: 1.2466356942847512 usec\nrounds: 189106"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 735618.880360939,
            "unit": "iter/sec",
            "range": "stddev: 1.688657206245244e-7",
            "extra": "mean: 1.3593995840744868 usec\nrounds: 26441"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 733269.8515627518,
            "unit": "iter/sec",
            "range": "stddev: 1.4495177858212075e-7",
            "extra": "mean: 1.363754418470622 usec\nrounds: 187783"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 725006.1138562869,
            "unit": "iter/sec",
            "range": "stddev: 1.7582000019375576e-7",
            "extra": "mean: 1.3792987133322623 usec\nrounds: 193817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 723947.1521762613,
            "unit": "iter/sec",
            "range": "stddev: 1.8112052008371452e-7",
            "extra": "mean: 1.3813162977351245 usec\nrounds: 187129"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 713067.2129075461,
            "unit": "iter/sec",
            "range": "stddev: 1.995319368542897e-7",
            "extra": "mean: 1.4023923438051227 usec\nrounds: 117787"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72460.87606384415,
            "unit": "iter/sec",
            "range": "stddev: 0.000004035552900519375",
            "extra": "mean: 13.800550784383502 usec\nrounds: 35"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58519.469274203264,
            "unit": "iter/sec",
            "range": "stddev: 8.056019702376813e-7",
            "extra": "mean: 17.088329959287982 usec\nrounds: 18637"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4bac02e97ebe6d1eecab1d8beaf9a93e4671c384",
          "message": "Add test context for no exception raised (#3630)\n\n* Add test context for no exception raised\r\n\r\nFixes #1891\r\n\r\n* Add missing test class",
          "timestamp": "2024-01-25T17:35:10-06:00",
          "tree_id": "b1d51d2ab0b40710ec7b634c4071e95c88c46521",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4bac02e97ebe6d1eecab1d8beaf9a93e4671c384"
        },
        "date": 1706230209563,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 902978.3796679953,
            "unit": "iter/sec",
            "range": "stddev: 2.50054280724211e-7",
            "extra": "mean: 1.1074462274143013 usec\nrounds: 30153"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 845863.7695033945,
            "unit": "iter/sec",
            "range": "stddev: 2.5354621189786605e-7",
            "extra": "mean: 1.1822234691374696 usec\nrounds: 87496"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 764214.0682641355,
            "unit": "iter/sec",
            "range": "stddev: 2.1961780076753683e-7",
            "extra": "mean: 1.3085338801357551 usec\nrounds: 106840"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 673250.8582270737,
            "unit": "iter/sec",
            "range": "stddev: 2.145528869755971e-7",
            "extra": "mean: 1.4853304496831707 usec\nrounds: 109992"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 557771.1776127421,
            "unit": "iter/sec",
            "range": "stddev: 2.199485005865484e-7",
            "extra": "mean: 1.7928498999894458 usec\nrounds: 111547"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 915413.9351302923,
            "unit": "iter/sec",
            "range": "stddev: 1.9221611614239273e-7",
            "extra": "mean: 1.0924019851824394 usec\nrounds: 52246"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 868745.2012978948,
            "unit": "iter/sec",
            "range": "stddev: 2.4058470310280917e-7",
            "extra": "mean: 1.1510854949253384 usec\nrounds: 132202"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 770179.2207495398,
            "unit": "iter/sec",
            "range": "stddev: 1.9095697298611167e-7",
            "extra": "mean: 1.2983990908334273 usec\nrounds: 111108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 683893.0583230638,
            "unit": "iter/sec",
            "range": "stddev: 2.247382966398445e-7",
            "extra": "mean: 1.4622169180252311 usec\nrounds: 113528"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 564383.1419932101,
            "unit": "iter/sec",
            "range": "stddev: 2.2906748853375566e-7",
            "extra": "mean: 1.7718459776603863 usec\nrounds: 102009"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 918238.4629538656,
            "unit": "iter/sec",
            "range": "stddev: 1.615603218309122e-7",
            "extra": "mean: 1.0890417253739482 usec\nrounds: 36285"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 872349.8580962319,
            "unit": "iter/sec",
            "range": "stddev: 1.7807638955747854e-7",
            "extra": "mean: 1.1463290682276772 usec\nrounds: 129180"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 779247.6737648365,
            "unit": "iter/sec",
            "range": "stddev: 1.9886888473973564e-7",
            "extra": "mean: 1.283289041042146 usec\nrounds: 123193"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 693780.798231425,
            "unit": "iter/sec",
            "range": "stddev: 1.8776156343774828e-7",
            "extra": "mean: 1.441377453151174 usec\nrounds: 121685"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 568412.0470143822,
            "unit": "iter/sec",
            "range": "stddev: 2.663234059758413e-7",
            "extra": "mean: 1.7592871320243104 usec\nrounds: 123277"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 784764.369789735,
            "unit": "iter/sec",
            "range": "stddev: 1.1397217407300067e-7",
            "extra": "mean: 1.2742678420376474 usec\nrounds: 3622"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 772402.7517096002,
            "unit": "iter/sec",
            "range": "stddev: 2.2547512916372852e-7",
            "extra": "mean: 1.294661363889042 usec\nrounds: 190043"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 771247.7100268974,
            "unit": "iter/sec",
            "range": "stddev: 2.2262239865419738e-7",
            "extra": "mean: 1.2966002841877156 usec\nrounds: 142180"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 777665.8587128565,
            "unit": "iter/sec",
            "range": "stddev: 1.7432074602732205e-7",
            "extra": "mean: 1.2858993214066732 usec\nrounds: 56371"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 782459.1395829606,
            "unit": "iter/sec",
            "range": "stddev: 1.8695636842150102e-7",
            "extra": "mean: 1.2780220070443364 usec\nrounds: 56406"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 772480.3849537524,
            "unit": "iter/sec",
            "range": "stddev: 2.2409913880650398e-7",
            "extra": "mean: 1.2945312521558316 usec\nrounds: 15682"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 817204.8899969162,
            "unit": "iter/sec",
            "range": "stddev: 1.0844235074324027e-7",
            "extra": "mean: 1.223683328673882 usec\nrounds: 191058"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 819323.393050234,
            "unit": "iter/sec",
            "range": "stddev: 1.0687628258695372e-7",
            "extra": "mean: 1.2205192827183058 usec\nrounds: 186608"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 782828.2979376877,
            "unit": "iter/sec",
            "range": "stddev: 2.6779605262046987e-7",
            "extra": "mean: 1.27741933018318 usec\nrounds: 54672"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 812789.4574555523,
            "unit": "iter/sec",
            "range": "stddev: 1.0377103412204772e-7",
            "extra": "mean: 1.2303309188218468 usec\nrounds: 191535"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 769384.2457863764,
            "unit": "iter/sec",
            "range": "stddev: 2.4966428308206696e-7",
            "extra": "mean: 1.2997406763611523 usec\nrounds: 21740"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 793358.817983886,
            "unit": "iter/sec",
            "range": "stddev: 1.1900327998615161e-7",
            "extra": "mean: 1.2604637111631765 usec\nrounds: 175678"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 796224.5853181107,
            "unit": "iter/sec",
            "range": "stddev: 1.1449397603038993e-7",
            "extra": "mean: 1.2559270568120882 usec\nrounds: 184683"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 793866.5373229685,
            "unit": "iter/sec",
            "range": "stddev: 9.978726774551265e-8",
            "extra": "mean: 1.259657578428917 usec\nrounds: 187652"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 765037.7048644647,
            "unit": "iter/sec",
            "range": "stddev: 2.160340486287553e-7",
            "extra": "mean: 1.3071251176792151 usec\nrounds: 185705"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 774918.5697710335,
            "unit": "iter/sec",
            "range": "stddev: 2.292570006521814e-7",
            "extra": "mean: 1.2904581707152425 usec\nrounds: 29762"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 796519.2870815443,
            "unit": "iter/sec",
            "range": "stddev: 1.2794831412443507e-7",
            "extra": "mean: 1.2554623801565574 usec\nrounds: 181498"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 766712.199484176,
            "unit": "iter/sec",
            "range": "stddev: 2.550771981237692e-7",
            "extra": "mean: 1.3042703646463092 usec\nrounds: 196010"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 797012.1760302287,
            "unit": "iter/sec",
            "range": "stddev: 1.000383514985835e-7",
            "extra": "mean: 1.2546859760421933 usec\nrounds: 183108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 794086.6025234425,
            "unit": "iter/sec",
            "range": "stddev: 1.0754945074900979e-7",
            "extra": "mean: 1.2593084895554307 usec\nrounds: 182921"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 731557.8014965899,
            "unit": "iter/sec",
            "range": "stddev: 3.306527578042888e-7",
            "extra": "mean: 1.3669459856134982 usec\nrounds: 24110"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 738198.7492591845,
            "unit": "iter/sec",
            "range": "stddev: 2.3625659843544843e-7",
            "extra": "mean: 1.3546487324769174 usec\nrounds: 194589"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 748011.2399125244,
            "unit": "iter/sec",
            "range": "stddev: 1.134749430158259e-7",
            "extra": "mean: 1.336878306958254 usec\nrounds: 170761"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 721010.0245513606,
            "unit": "iter/sec",
            "range": "stddev: 1.7861779299238526e-7",
            "extra": "mean: 1.3869432683994058 usec\nrounds: 55531"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 723184.5850813824,
            "unit": "iter/sec",
            "range": "stddev: 2.537564419629051e-7",
            "extra": "mean: 1.3827728364639669 usec\nrounds: 188244"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 74200.4797204631,
            "unit": "iter/sec",
            "range": "stddev: 0.000003858584589798154",
            "extra": "mean: 13.477001816798479 usec\nrounds: 39"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58263.37392533789,
            "unit": "iter/sec",
            "range": "stddev: 9.951638929065257e-7",
            "extra": "mean: 17.16344132904934 usec\nrounds: 17567"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gshivakumar@gmail.com",
            "name": "gshiva",
            "username": "gshiva"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4d17e9f14f3cafb6757b96eefabdc7ed4891306",
          "message": "Handle HTTP 2XX responses as successful in OTLP exporters (#3623)\n\n* Handle HTTP 2XX responses as successful in OTLP exporters\r\n\r\n* Add test cases for 2XX HTTP responses\r\n\r\n* Add CHANGELOG entry\r\n\r\n* Fix lint",
          "timestamp": "2024-01-25T18:27:50-06:00",
          "tree_id": "aceac2e21ff03db662b6a0471f07be78e954cc49",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c4d17e9f14f3cafb6757b96eefabdc7ed4891306"
        },
        "date": 1706230721992,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 929573.6438973498,
            "unit": "iter/sec",
            "range": "stddev: 2.278603731900507e-7",
            "extra": "mean: 1.0757619975189694 usec\nrounds: 32907"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 878474.8215660342,
            "unit": "iter/sec",
            "range": "stddev: 2.0645053622291417e-7",
            "extra": "mean: 1.1383365526826665 usec\nrounds: 98617"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 786134.477800997,
            "unit": "iter/sec",
            "range": "stddev: 1.8993484999797172e-7",
            "extra": "mean: 1.2720469948058188 usec\nrounds: 112552"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 687872.1754427593,
            "unit": "iter/sec",
            "range": "stddev: 2.2515255736830405e-7",
            "extra": "mean: 1.4537584680705176 usec\nrounds: 117684"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 570117.2247018729,
            "unit": "iter/sec",
            "range": "stddev: 2.1792747685699553e-7",
            "extra": "mean: 1.7540252366921951 usec\nrounds: 110083"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 920954.972494414,
            "unit": "iter/sec",
            "range": "stddev: 1.8082069963355004e-7",
            "extra": "mean: 1.0858294160587374 usec\nrounds: 53304"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 882921.5868015365,
            "unit": "iter/sec",
            "range": "stddev: 2.295721160608509e-7",
            "extra": "mean: 1.1326034100294122 usec\nrounds: 126145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 782834.7626147853,
            "unit": "iter/sec",
            "range": "stddev: 1.9519854711925093e-7",
            "extra": "mean: 1.2774087812092685 usec\nrounds: 125174"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 679695.8292161092,
            "unit": "iter/sec",
            "range": "stddev: 2.5119293965938824e-7",
            "extra": "mean: 1.4712463384589198 usec\nrounds: 126741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 570796.7467681663,
            "unit": "iter/sec",
            "range": "stddev: 4.122655341033839e-7",
            "extra": "mean: 1.7519371048660832 usec\nrounds: 109745"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 923133.2381342592,
            "unit": "iter/sec",
            "range": "stddev: 1.5618561657520576e-7",
            "extra": "mean: 1.0832672453882126 usec\nrounds: 33586"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 877664.5537401027,
            "unit": "iter/sec",
            "range": "stddev: 2.0632895398962531e-7",
            "extra": "mean: 1.1393874752473183 usec\nrounds: 123818"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 783028.6695977283,
            "unit": "iter/sec",
            "range": "stddev: 2.2992340075171986e-7",
            "extra": "mean: 1.27709244734773 usec\nrounds: 133750"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 695057.3889343812,
            "unit": "iter/sec",
            "range": "stddev: 2.5065014332796245e-7",
            "extra": "mean: 1.438730119153381 usec\nrounds: 117349"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 577014.510870328,
            "unit": "iter/sec",
            "range": "stddev: 2.8122593445935704e-7",
            "extra": "mean: 1.733058668648853 usec\nrounds: 125997"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 784877.9944732587,
            "unit": "iter/sec",
            "range": "stddev: 3.735429435405677e-7",
            "extra": "mean: 1.2740833696976208 usec\nrounds: 3825"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 811631.1644972336,
            "unit": "iter/sec",
            "range": "stddev: 1.2245924254564335e-7",
            "extra": "mean: 1.2320867454854962 usec\nrounds: 190583"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 786332.8379297707,
            "unit": "iter/sec",
            "range": "stddev: 1.9182522384837616e-7",
            "extra": "mean: 1.271726108542999 usec\nrounds: 159215"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 818365.03865229,
            "unit": "iter/sec",
            "range": "stddev: 9.546951815336874e-8",
            "extra": "mean: 1.2219485837846058 usec\nrounds: 190380"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 812820.2389009179,
            "unit": "iter/sec",
            "range": "stddev: 1.0982072264804556e-7",
            "extra": "mean: 1.2302843262763528 usec\nrounds: 181929"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 788445.8683435038,
            "unit": "iter/sec",
            "range": "stddev: 2.0554530829560689e-7",
            "extra": "mean: 1.2683178898520502 usec\nrounds: 18684"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 820508.47274829,
            "unit": "iter/sec",
            "range": "stddev: 9.172984930637302e-8",
            "extra": "mean: 1.2187564579930588 usec\nrounds: 193817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 818702.8518902126,
            "unit": "iter/sec",
            "range": "stddev: 9.284589800018329e-8",
            "extra": "mean: 1.2214443832597022 usec\nrounds: 191740"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 825412.1967039892,
            "unit": "iter/sec",
            "range": "stddev: 9.731427414308287e-8",
            "extra": "mean: 1.2115158995628723 usec\nrounds: 192014"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 821362.7318082423,
            "unit": "iter/sec",
            "range": "stddev: 1.0590026704806329e-7",
            "extra": "mean: 1.2174888892249653 usec\nrounds: 193817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 769500.7012564833,
            "unit": "iter/sec",
            "range": "stddev: 3.912385306405825e-7",
            "extra": "mean: 1.2995439749010556 usec\nrounds: 31026"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 794466.5829348768,
            "unit": "iter/sec",
            "range": "stddev: 1.0867471442399378e-7",
            "extra": "mean: 1.2587061828401296 usec\nrounds: 181744"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 786479.5479885843,
            "unit": "iter/sec",
            "range": "stddev: 1.8525117379500065e-7",
            "extra": "mean: 1.271488880489636 usec\nrounds: 183923"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 759784.8889681747,
            "unit": "iter/sec",
            "range": "stddev: 2.2900339916856773e-7",
            "extra": "mean: 1.3161620012712405 usec\nrounds: 160788"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 794859.8382511338,
            "unit": "iter/sec",
            "range": "stddev: 1.0687274972014698e-7",
            "extra": "mean: 1.2580834404719954 usec\nrounds: 186285"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 775785.5069225213,
            "unit": "iter/sec",
            "range": "stddev: 2.090341680334859e-7",
            "extra": "mean: 1.2890160889534013 usec\nrounds: 27296"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 800340.9584992563,
            "unit": "iter/sec",
            "range": "stddev: 1.105234481496687e-7",
            "extra": "mean: 1.2494674793042337 usec\nrounds: 187259"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 800535.5890042011,
            "unit": "iter/sec",
            "range": "stddev: 1.0931125319000764e-7",
            "extra": "mean: 1.2491637020709045 usec\nrounds: 186349"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 801091.1443376367,
            "unit": "iter/sec",
            "range": "stddev: 1.1286932357317062e-7",
            "extra": "mean: 1.2482974091878478 usec\nrounds: 187783"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 791638.5715963828,
            "unit": "iter/sec",
            "range": "stddev: 1.1595347510918969e-7",
            "extra": "mean: 1.2632027239191301 usec\nrounds: 188442"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 715121.0554455599,
            "unit": "iter/sec",
            "range": "stddev: 2.2412012609033813e-7",
            "extra": "mean: 1.3983646438391397 usec\nrounds: 25752"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 734816.397334528,
            "unit": "iter/sec",
            "range": "stddev: 1.497636708845251e-7",
            "extra": "mean: 1.3608841659323314 usec\nrounds: 59153"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 742891.3160220549,
            "unit": "iter/sec",
            "range": "stddev: 1.1123623785554734e-7",
            "extra": "mean: 1.346091922779068 usec\nrounds: 171964"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 741067.5871727586,
            "unit": "iter/sec",
            "range": "stddev: 1.2489585850801873e-7",
            "extra": "mean: 1.3494045851001155 usec\nrounds: 172019"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 701030.8004369583,
            "unit": "iter/sec",
            "range": "stddev: 2.808984376494491e-7",
            "extra": "mean: 1.4264708474673176 usec\nrounds: 182486"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 67285.97028607441,
            "unit": "iter/sec",
            "range": "stddev: 0.000005316296813857534",
            "extra": "mean: 14.861939208848135 usec\nrounds: 35"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58770.87774937444,
            "unit": "iter/sec",
            "range": "stddev: 9.327675777496772e-7",
            "extra": "mean: 17.015229962439076 usec\nrounds: 18473"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gshivakumar@gmail.com",
            "name": "gshiva",
            "username": "gshiva"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4d17e9f14f3cafb6757b96eefabdc7ed4891306",
          "message": "Handle HTTP 2XX responses as successful in OTLP exporters (#3623)\n\n* Handle HTTP 2XX responses as successful in OTLP exporters\r\n\r\n* Add test cases for 2XX HTTP responses\r\n\r\n* Add CHANGELOG entry\r\n\r\n* Fix lint",
          "timestamp": "2024-01-25T18:27:50-06:00",
          "tree_id": "aceac2e21ff03db662b6a0471f07be78e954cc49",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c4d17e9f14f3cafb6757b96eefabdc7ed4891306"
        },
        "date": 1706230778315,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 928118.7525122912,
            "unit": "iter/sec",
            "range": "stddev: 1.7192035590401644e-7",
            "extra": "mean: 1.0774483300689013 usec\nrounds: 31531"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 874996.0199048362,
            "unit": "iter/sec",
            "range": "stddev: 2.0336752959613261e-7",
            "extra": "mean: 1.142862341372432 usec\nrounds: 87868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 785373.9150726033,
            "unit": "iter/sec",
            "range": "stddev: 2.2483679529107661e-7",
            "extra": "mean: 1.2732788558524455 usec\nrounds: 125879"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 683604.621785568,
            "unit": "iter/sec",
            "range": "stddev: 2.101031840437345e-7",
            "extra": "mean: 1.4628338781385222 usec\nrounds: 120510"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 570238.4471471027,
            "unit": "iter/sec",
            "range": "stddev: 3.33011518516316e-7",
            "extra": "mean: 1.7536523624511642 usec\nrounds: 117787"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 923084.4520908929,
            "unit": "iter/sec",
            "range": "stddev: 1.671953332659174e-7",
            "extra": "mean: 1.0833244972709535 usec\nrounds: 49715"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 870046.890751172,
            "unit": "iter/sec",
            "range": "stddev: 2.4505175934945717e-7",
            "extra": "mean: 1.149363339643258 usec\nrounds: 135745"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 780593.5952782102,
            "unit": "iter/sec",
            "range": "stddev: 2.8415658547520245e-7",
            "extra": "mean: 1.2810763578499405 usec\nrounds: 138727"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 678047.7335038703,
            "unit": "iter/sec",
            "range": "stddev: 2.3460799600656733e-7",
            "extra": "mean: 1.4748224211773608 usec\nrounds: 124133"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 568202.8557455458,
            "unit": "iter/sec",
            "range": "stddev: 3.0116152935221564e-7",
            "extra": "mean: 1.75993483645535 usec\nrounds: 118020"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 931817.4352421875,
            "unit": "iter/sec",
            "range": "stddev: 2.2729619698246308e-7",
            "extra": "mean: 1.0731715915361588 usec\nrounds: 34493"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 883763.9980379088,
            "unit": "iter/sec",
            "range": "stddev: 2.3463123608044384e-7",
            "extra": "mean: 1.131523802983775 usec\nrounds: 137343"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 786807.5052898313,
            "unit": "iter/sec",
            "range": "stddev: 2.185291848358128e-7",
            "extra": "mean: 1.2709588981762907 usec\nrounds: 127101"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 684920.0672372674,
            "unit": "iter/sec",
            "range": "stddev: 2.604451049400227e-7",
            "extra": "mean: 1.4600243850843164 usec\nrounds: 132922"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 575711.9781296415,
            "unit": "iter/sec",
            "range": "stddev: 2.966913161465438e-7",
            "extra": "mean: 1.7369796668965873 usec\nrounds: 125820"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 788075.3087621547,
            "unit": "iter/sec",
            "range": "stddev: 1.6204451571759848e-7",
            "extra": "mean: 1.2689142634994106 usec\nrounds: 3800"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 824002.1237701192,
            "unit": "iter/sec",
            "range": "stddev: 1.0507687772164878e-7",
            "extra": "mean: 1.2135891051161671 usec\nrounds: 190718"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 784206.1501080996,
            "unit": "iter/sec",
            "range": "stddev: 2.2055608293621108e-7",
            "extra": "mean: 1.275174901219729 usec\nrounds: 148185"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 824085.086804655,
            "unit": "iter/sec",
            "range": "stddev: 1.0933179568921687e-7",
            "extra": "mean: 1.2134669295830185 usec\nrounds: 190651"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 822725.936843914,
            "unit": "iter/sec",
            "range": "stddev: 1.1823310757594626e-7",
            "extra": "mean: 1.2154715868520358 usec\nrounds: 193677"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 787021.8934370962,
            "unit": "iter/sec",
            "range": "stddev: 2.120343859289818e-7",
            "extra": "mean: 1.2706126835084373 usec\nrounds: 18356"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 825643.5516750695,
            "unit": "iter/sec",
            "range": "stddev: 1.4006104720664085e-7",
            "extra": "mean: 1.211176418650876 usec\nrounds: 187194"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 790044.4102520872,
            "unit": "iter/sec",
            "range": "stddev: 2.408742386726077e-7",
            "extra": "mean: 1.2657516299380185 usec\nrounds: 199284"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 830924.0465488413,
            "unit": "iter/sec",
            "range": "stddev: 1.0590205912117802e-7",
            "extra": "mean: 1.2034794325105869 usec\nrounds: 194378"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 825926.6223875149,
            "unit": "iter/sec",
            "range": "stddev: 1.4190315305146728e-7",
            "extra": "mean: 1.2107613108647466 usec\nrounds: 194237"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 769931.4126488727,
            "unit": "iter/sec",
            "range": "stddev: 2.3694886027685477e-7",
            "extra": "mean: 1.2988169901518878 usec\nrounds: 28489"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 802275.7287008646,
            "unit": "iter/sec",
            "range": "stddev: 1.3612723981056795e-7",
            "extra": "mean: 1.24645426033181 usec\nrounds: 172906"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 805565.1421675929,
            "unit": "iter/sec",
            "range": "stddev: 1.0693319373409428e-7",
            "extra": "mean: 1.2413645373349038 usec\nrounds: 183233"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 800213.5738831742,
            "unit": "iter/sec",
            "range": "stddev: 1.0879889271676963e-7",
            "extra": "mean: 1.2496663798732228 usec\nrounds: 188707"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 804628.4120524719,
            "unit": "iter/sec",
            "range": "stddev: 1.1309444470782785e-7",
            "extra": "mean: 1.2428097057238732 usec\nrounds: 182610"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 767195.7408442124,
            "unit": "iter/sec",
            "range": "stddev: 3.044206985637091e-7",
            "extra": "mean: 1.303448320632767 usec\nrounds: 27472"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 803252.4895547513,
            "unit": "iter/sec",
            "range": "stddev: 1.0898712721679245e-7",
            "extra": "mean: 1.244938562909786 usec\nrounds: 182176"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 803810.2450926525,
            "unit": "iter/sec",
            "range": "stddev: 1.1006870537251631e-7",
            "extra": "mean: 1.244074713037196 usec\nrounds: 183735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 804002.0501021746,
            "unit": "iter/sec",
            "range": "stddev: 1.0906654912490747e-7",
            "extra": "mean: 1.2437779230449941 usec\nrounds: 182796"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 782965.8420640763,
            "unit": "iter/sec",
            "range": "stddev: 1.588613084385844e-7",
            "extra": "mean: 1.277194925086096 usec\nrounds: 175678"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 725409.9935290857,
            "unit": "iter/sec",
            "range": "stddev: 3.142407205881288e-7",
            "extra": "mean: 1.3785307742109352 usec\nrounds: 22928"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 727455.0154350078,
            "unit": "iter/sec",
            "range": "stddev: 2.955510994598637e-7",
            "extra": "mean: 1.374655447803895 usec\nrounds: 190515"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 721982.1498486637,
            "unit": "iter/sec",
            "range": "stddev: 2.4739063918701565e-7",
            "extra": "mean: 1.3850757947542225 usec\nrounds: 190786"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 754882.3854076592,
            "unit": "iter/sec",
            "range": "stddev: 1.0810058867755768e-7",
            "extra": "mean: 1.3247096757463348 usec\nrounds: 175449"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 708718.3818085091,
            "unit": "iter/sec",
            "range": "stddev: 3.092129080009247e-7",
            "extra": "mean: 1.4109976905752013 usec\nrounds: 195368"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 70011.14415781487,
            "unit": "iter/sec",
            "range": "stddev: 0.000005002825789359233",
            "extra": "mean: 14.28344032981179 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58260.230023432494,
            "unit": "iter/sec",
            "range": "stddev: 9.142881779144257e-7",
            "extra": "mean: 17.164367521339962 usec\nrounds: 23245"
          }
        ]
      }
    ]
  }
}