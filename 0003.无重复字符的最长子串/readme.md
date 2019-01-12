- {p,w,w,k,e,w}
- {[p,w,w],k,e,w} => 是否有重复 true
- {p,[w,w,k],e,w} => 是否有重复 true
- {p,w,[w,k,e],w} => 是否有重复 false 增加 窗口大小 判断窗口游标是否比数组 length 还大 是 返回上次结果
- {p,w,[w,k,e,w]} => 是否有重复 true 增加 窗口大小 判断窗口游标是否比数组 length 还大 是 返回上次结果

---

- {d,v,d,f}
- {[d,v,d],f} => 是否有重复 true
- {d,[v,d,f]} => 是否有重复 false 增加 窗口大小 判断窗口游标是否比数组 length 还大 是 返回上次结果
