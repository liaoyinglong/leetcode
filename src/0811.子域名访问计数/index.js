"use strict";
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let res = {};
    cpdomains.forEach(item => {
        let [count, url] = item.split(' ');
        let index = 0;
        if (url in res) {
            res[url] = res[url] + Number(count);
        }
        else {
            res[url] = Number(count);
        }
        while ((index = url.indexOf('.', index + 1)) > -1) {
            let key = url.slice(index + 1);
            if (key in res) {
                res[key] = res[key] + Number(count);
            }
            else {
                res[key] = Number(count);
            }
        }
    });
    return Object.keys(res).map(key => {
        return `${res[key]} ${key}`;
    });
};
// console.log(subdomainVisits(['9001 discuss.leetcode.com'])); // ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
// console.log(
//   subdomainVisits([
//     '900 google.mail.com',
//     '50 yahoo.com',
//     '1 intel.mail.com',
//     '5 wiki.org'
//   ])
// ); // ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
console.log(subdomainVisits([
    '2777 nak.mkw.co',
    '654 yaw.lmm.ca',
    '3528 jyx.arz.us',
    '3215 bll.hoh.network',
    '408 tdt.zfz.network',
    '3322 xhe.team',
    '8342 srp.team',
    '9259 bfo.net',
    '3875 brk.ato.network',
    '2531 mce.ser.com',
    '2471 czb.us',
    '4806 xss.dfa.co',
    '654 yls.yjt.co',
    '767 irh.epf.us',
    '1501 ara.ca',
    '243 qay.network',
    '9103 vbo.org',
    '6890 bfo.network',
    '4296 xtb.jre.us',
    '2329 vva.qay.network',
    '9846 fuw.org',
    '4681 lwf.ytn.network',
    '1781 lbk.ksc.co',
    '7464 jpd.fff.co',
    '2740 xhe.org',
    '4602 weq.buf.team',
    '3055 fdy.jkx.com',
    '5705 mqa.wsv.net',
    '6629 vdu.bfo.team',
    '9897 lra.uyy.org',
    '8167 ahm.jre.team',
    '9374 jep.ato.co',
    '3624 vmv.epf.network',
    '6865 thk.net',
    '6920 tlc.dfa.us',
    '9372 hci.jia.network',
    '7968 gjf.network',
    '7292 zbl.ksc.net',
    '2862 coh.sci.net',
    '3855 yjt.network',
    '1387 hju.gbq.org',
    '817 sgp.htq.co',
    '2406 hkb.ocf.co',
    '622 wmt.cwn.net',
    '9172 zfz.net',
    '1523 suq.bhp.co',
    '9581 gqi.team',
    '2160 hsj.epf.org',
    '32 ulz.com',
    '1225 lmm.ca',
    '1137 ujs.qzi.co',
    '5041 cdf.hwu.us',
    '4126 lir.ajl.team',
    '3111 gdw.team',
    '8928 arz.org',
    '9531 hoh.co',
    '7344 czb.com',
    '2715 ubt.okv.us',
    '1110 kdd.znq.us',
    '5729 srp.com',
    '6122 nqk.srp.org',
    '7193 xth.fzx.ca',
    '3496 ytn.com',
    '3950 xuf.network',
    '4521 weh.bfo.us',
    '3262 mor.ixi.us',
    '4975 okv.com',
    '7089 ske.yls.com',
    '4198 xfs.okv.co',
    '2444 vks.gxz.team',
    '1789 xcf.zqy.ca',
    '7392 uyy.net',
    '3449 tfm.us',
    '5907 zfz.us',
    '9530 omu.network',
    '3314 ytd.hkt.net',
    '9523 wyv.cgl.network',
    '4439 gtu.us',
    '8390 zqk.network',
    '1627 bhp.ca',
    '3609 bhp.team',
    '8557 uai.lfn.net',
    '2913 ret.ych.ca',
    '2447 ksc.com',
    '7476 cze.yvr.net',
    '8544 xrj.bhp.com',
    '6129 hkt.com',
    '8274 ulz.co',
    '9219 tfm.ca',
    '5016 zwv.gqi.co',
    '5738 lar.bfo.team',
    '3377 jkx.network',
    '2979 bhp.org',
    '8176 ujm.gqs.ca',
    '84 lmm.network',
    '3090 ycc.yjt.us',
    '7042 btv.com',
    '2965 gxj.org',
    '8263 cwn.org',
    '1873 kse.gjf.ca'
]));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBZ0NBOzs7R0FHRztBQUNILElBQUksZUFBZSxHQUFHLFVBQVMsU0FBbUI7SUFDaEQsSUFBSSxHQUFHLEdBQWdCLEVBQUUsQ0FBQztJQUUxQixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFZCxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0wsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtRQUVELE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDakQsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO2dCQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNMLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUMsSUFB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