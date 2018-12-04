const assert = require('assert');

const inventoryManagementSystem = require('./inventory-management-system.js');
const inventoryManagementSystem2 = require('./inventory-management-system2.js');

describe('Day 2: Inventory Management System', () => {
   it('should properly calculate checksum', () => {
        const items = 
        `abcdef
         bababc
         abbcde
         abcccd
         aabcdd
         abcdee
         ababab`

         assert.equal(inventoryManagementSystem(items), 12);
   });

   it('should properly calculate checksum part 2', () => {
      const items = 
      `klmno
       pqrst
       abcde
       axcye
       wvxyz
       fguij
       fghij`

       assert.equal(inventoryManagementSystem2(items), "fgij");
 });

it('should properly calculate checksum part 2 real test input', () => {
      const items = 
      `pbopcmjeizuhxlqnwasfgtycdm
      pjokrmjeizuhxlqnfasfguycdv
      pbokrpjejkuhxlqnwasfgtycdv
      sbokrmjeizuhxaqnwastgtycdv
      pbokrmjeizuhxljnnasfgtycnv
      pbokrqjeizuhxbqndasfgtycdv
      bbokrmjeizuhxlqnwasfgtycfj
      pbokrmjeisuhxlqnwasfzdycdv
      pbokrmjefxuhxlqnwasfptycdv
      pqokrmjenzuhxlqnwasfgtygdv
      pbokrmjeizunklqnwassgtycdv
      pbokrmjeizghxvqnkasfgtycdv
      lboirmjeizuhxlqnwfsfgtycdv
      pbofrmjeizuhalqnwasfgtyddv
      pbokrmjeiguhplqcwasfgtycdv
      pbokrmjeizzhxlqnwavfgtyctv
      pbokrmjeizuhxlqnwaefgtycaj
      pbokzmjedzuhxlqnwasfgtlcdv
      pnokrmjegzuhxlbnwasfgtycdv
      pbojrmjeizuhtlqniasfgtycdv
      pbokxmiefzuhxlqnwasfgtycdv
      pbokrmoeizuhxlqnpasngtycdv
      abokrmjeezuhxlqnwasfdtycdv
      pbokrmyeizugxlqnwasfgtycda
      pbokdmjeizuhxlqnuatfgtycdv
      psokrmjeiauhxlqnwasxgtycdv
      pbokrmjeizuhxlqzwasfgtyzdy
      pboktmjeizuhxnqndasfgtycdv
      pbodrrjeizuhxlqnwasfgtycdb
      pbokrmjekzuhxljnwasfgtycuv
      pbokrmjnizuhllqnwawfgtycdv
      prmkrmjeiwuhxlqnwasfgtycdv
      pbokrmjeizkhxlenwajfgtycdv
      pbofrmjeizuixlqnwasfgoycdv
      gbhkrmjeizuhclqnwasfgtycdv
      pbokrmweizuwxlqnwasfgtycyv
      pbukrmjeizuhxlqnwasfgqhcdv
      pbokxmjeizuhxlqnwasfgtecdu
      pbokomjeizuhrlqnfasfgtycdv
      bbokymjeizuhxlqnpasfgtycdv
      pbodrmjeizuhxlqnwadfgtgcdv
      zbokrljeipuhxlqnwasfgtycdv
      pboermjeizuxxlqnwasfgtpcdv
      pqbkrmjeizuhxlqnjasfgtycdv
      pbokrmfeizuhxvqgwasfgtycdv
      pbokrmjeizuhzlqnjasfdtycdv
      rbofrmjeizkhxlqnwasfgtycdv
      pbokrmseizubxlqnwasfgtycdy
      pbocrmjeizuhxaqnwasfgtycda
      pbokrmjeizuhxlqndakfgtscdv
      pbokrrjeizuhxlqnwgshgtycdv
      pbokrajeizuhxpqnwasrgtycdv
      pbokrbjeizubxlqnwssfgtycdv
      pbokemjhizuhxlqnwazfgtycdv
      pbokrmjeizuhxlqntisfgtyrdv
      pbokrmjwinuhxlqnwasfgkycdv
      pypkrmjeizuhxlqtwasfgtycdv
      pbokrmjeizuhxlqniasfrpycdv
      pbokomjeizuhxlqnwasfgtgcdw
      pbokrmjeizusplqnwxsfgtycdv
      pbodrmueizxhxlqnwasfgtycdv
      pbokwmjeizurxlqnwasfgtycdi
      pbohrmjejzuhxlqnwasfgtycgv
      pbokrmtqizuhxlqnwasfitycdv
      ptozrmjeizuhylqnwasfgtycdv
      pbokrmjtizuhxlqfwasfgtykdv
      pbokrmpeizuhxnqmwasfgtycdv
      pbokrmjeizujxlynwtsfgtycdv
      dbokrmjeizuhxlqnwasngticdv
      pbskrmjeizuhxlqnrasfttycdv
      pbwkrmjerzuhxlqnwaslgtycdv
      pboyrmceizuhxlqnwssfgtycdv
      pbokpmjeizchxlqngasfgtycdv
      pbokrmjenzuhxlqnwcsfgxycdv
      pbxkrmjeizuhxlqnwadfgtyckv
      pbqkrmjeizuhxlqnwasdgdycdv
      pbokrmoeizdhxlqnwasfgtycqv
      pbokrmjejzuhxlqnwksfgtycwv
      pbfkrmjeieuhxlnnwasfgtycdv
      pbokrmjeiuuhxlqnpalfgtycdv
      pbokrmjeizunxyqnwasfgtdcdv
      pbokrmjeazuhxrqnwasogtycdv
      pbmkrmjeizuhxlqnwaufgtycdj
      xbskrmjeipuhxlqnwasfgtycdv
      tbokrujlizuhxlqnwasfgtycdv
      xbokvmjeizuhxyqnwasfgtycdv
      pbnhrmheizuhxlqnwasfgtycdv
      pboorajrizuhxlqnwasfgtycdv
      pbokrmjeizuhxminwusfgtycdv
      pboqrmjeizuhxlqnwaslgtscdv
      pgokrdjeizuhxlnnwasfgtycdv
      pbokrmjeizuhxiqnwasvttycdv
      pbokrmwnizuhzlqnwasfgtycdv
      pbokrmjlizmhjlqnwasfgtycdv
      pbwkrmjeizohxlqnwasfgtyzdv
      pbykrmjmizwhxlqnmasfgtycdv
      pbokrmjzizuhxeqnwasfgtpcdv
      pbokrmjewzuhxzqnwasfgtybdv
      pbokrmjeimupxlonwasfgtycdv
      pbokrmjvizuhxlqnuasfgtycqv
      pbokrmjeizjdxlqnwasfetycdv
      pbofrmjeizurxlqnwasfztycdv
      pbozrmjeizuhxxqpwasfgtycdv
      pbovtmjeizuhxlqnwapfgtycdv
      prokrmjeuzuhxlqnwasfgtycqv
      ubokrmjeizuhxljnwasfgtdcdv
      pboknmjepzuhxlqnwasogtycdv
      pbokrmjaizuaxljnwasfgtycdv
      pbdkrcjeizuhxlqnwasfgtvcdv
      pbokymjeizuhxlqnwaxfgtyfdv
      pbokrmjaizuhxlqnfasfgtyodv
      pdekrmmeizuhxlqnwasfgtycdv
      rbokrmjeizuuxlqnwasfgtycdj
      pbokrmneifuhxlqiwasfgtycdv
      pbokrmjeizlbxlunwasfgtycdv
      pbokrmjewzuhxxqnwasfgoycdv
      pbokrmjeizuhxlqtwasfgtzcdo
      pbokrmkeizzhxlqnwasfgtycmv
      pbokrmjeiquhxlqnywsfgtycdv
      xbokrmjeizjhxlqdwasfgtycdv
      pbokrmjeizahxzqnzasfgtycdv
      pbokrmjeizuhxmqmwasfgtytdv
      pbokrmheiluhxlqnwasfgoycdv
      rbokrmjeizuhxlqnwaslgtycqv
      pbbkzmjeizuhxvqnwasfgtycdv
      pbokrmjeizudxlznwgsfgtycdv
      pbokemjeizuhxlqnwascgtysdv
      pbokrmjdizuexlgnwasfgtycdv
      pbokzmjeizuhxlqnwnsfggycdv
      pbokrmjeizuhxtqnwasfgiycdy
      bbokrmjeizuhclunwasfgtycdv
      pbtkrmjeieuhxlqnwasfgtycrv
      pbokrmjeizutxlbnwasngtycdv
      pbokrmjevzumxlqnwasfgtyydv
      pbokrmjsizuhxlqowasfgtycyv
      pbssrmjeizuhxlqbwasfgtycdv
      pbokrmjeizuhflqnwxsfstycdv
      pbokimjeizuhxlqnwasfgtywdm
      pbokrmjbizuhxlqdwasfgtygdv
      pbokrmheizuhxlqxwasfgtycnv
      poakrmjeizuhylqnwasfgtycdv
      vbrkrmjeizuhxlqnwaszgtycdv
      pbokrmjeizuhxiqnudsfgtycdv
      pbokrldeizuhxlqnwasjgtycdv
      pbokrmjeizjhflqnwasfgtymdv
      pbokrmjeizuhxliawasfgtvcdv
      pbokrmjeisuhtoqnwasfgtycdv
      nbokrijeizuhxlqnwasfgtycdh
      pbokrmjeizrhxlqnwxsfztycdv
      pbotrmjeizuhxlcnwasfgtyvdv
      pbokrmjewzuhxlquwasfgtjcdv
      pbosrmjeipuhxlqnwasfgtvcdv
      pbokrmjebzurxlunwasfgtycdv
      pbogimieizuhxlqnwasfgtycdv
      pbokrmjeizihxlqnwasagtyzdv
      pbokrmjeizuoxlqnausfgtycdv
      pbokrmjeizuhxlqnwashgbjcdv
      pbokrdjeizuhxlnnwasfgoycdv
      pbokrzjtizlhxlqnwasfgtycdv
      peokrmjexzuhxlqnwasfgoycdv
      cboprmjeizuhxlqnwasfgfycdv
      pbitrmjeizjhxlqnwasfgtycdv
      pbourmjeizuhxldnwjsfgtycdv
      pboivmjeizuhxlqnwasvgtycdv
      pbokrmjeiduhxaqnqasfgtycdv
      pbokicjeiwuhxlqnwasfgtycdv
      pbokrmmeizulxlqnwasfgtyvdv
      pbokrmjeieuhxlqnaapfgtycdv
      pbokxmjeiuuhxlqnwasfgtyqdv
      pbokrmjeizuhxgqniaslgtycdv
      pbokrmjeizuuxlqnwisfgtyckv
      pbovlmjepzuhxlqnwasfgtycdv
      pbokrmjeizuhxlqdwaqfgtycdj
      pbztrvjeizuhxlqnwasfgtycdv
      pbokrmjeizuholunwasfptycdv
      pbokrmjeizudxlqnwusfgtycqv
      nbokrmjzizmhxlqnwasfgtycdv
      pbokrmjeypunxlqnwasfgtycdv
      pbokrjjxizuhxlqnwasfgtyddv
      pbokrmjeizuhilqnwiufgtycdv
      pbokrmjeizuhxtqowasfgfycdv
      qbokrgjeizuhxlqnwasfgtycdx
      pvoarmjeizuhxlqnwasfgtfcdv
      pbokrmjjizuhxlqnwasfggyczv
      pbtkrmjeizuhnlqncasfgtycdv
      pbokrmjeizuzxlqnwasfgtyjnv
      jmokrmzeizuhxlqnwasfgtycdv
      pbykrmjmizwhxlqnwasfgtycdv
      nbokrmjeizlhxlqnwasfgtecdv
      pbokrmjeizuhxlqhwasrgrycdv
      pbokrmjeiruhxlqnwasfgtnedv
      pbokrmjeizohxlznwasfgtycuv
      paokrmjdizuhxlqnwasfktycdv
      pbokrmjetzutxlqnwasfntycdv
      pboyrmjeizuhxlqnwasfgtetdv
      pbokgujeizuhxlqwwasfgtycdv
      pbokrifeizshxlqnwasfgtycdv
      sbokrmjeizfhxlqnaasfgtycdv
      pbokrmjeizuhxlqpwrsfgfycdv
      pbokxmjeikuhxlqnwasfctycdv
      fbokrmjhizuhxlqnmasfgtycdv
      pbekamjeizuhxlqnwaxfgtycdv
      pboksmpeizuhxlqnwasfgtyclv
      pbokrmjeizrhxdqnwasfgzycdv
      pbogrmxeizurxlqnwasfgtycdv
      pbokrmjeieuhxlqnwqsfgtychv
      vbokrmjeizuhxlqnwabfgtycdq
      lbokrmjeizupxlqvwasfgtycdv
      pbokrmjeizuhglqnuasfgtucdv
      hbokrmjeizuhelqnwasfgtrcdv
      pbokrmweizuhxlqnwhsfgtyvdv
      pbokrmjeizuhxrqnwasfvtccdv
      pbokrmneizuhxlwnyasfgtycdv
      ybokymjeqzuhxlqnwasfgtycdv
      pbousmjeizuhxlqswasfgtycdv
      pblkimjeizuhxlqnwacfgtycdv
      psokrmjeizuhxlqnwasfgbpcdv
      peokrwjeizghxlqnwasfgtycdv
      pbokrmjeizudxlqnwzsfrtycdv
      pbotrmjezzxhxlqnwasfgtycdv
      pkokrmjezzuhxlqnwasfgtycdh
      pbokrmleizuhxlnnwasfgtyndv
      pboxwmjeituhxlqnwasfgtycdv
      pbokrmjeizoczlqnwasfgtycdv
      pbokomjeizuhxlqnwhsfgtybdv
      pbhwrmjeizuhxlqnwasfgpycdv
      pbwkrmjeizuhxeqnwasfgtyidv
      pbokrmjeizuhxlqnjasfgmicdv
      tbokrgjeizuhxlqhwasfgtycdv
      pbolrqjeizuhxlqnhasfgtycdv
      pbogrhjeizbhxlqnwasfgtycdv
      pbokrmjeizghxlqnwashgtycdx
      pbokrmjeizuhrlqnwasfgthcrv
      pbokrmjeizuhxlqnwfsngtacdv
      pbokrmxeizuhxlqnwasfotyctv
      pbokrmjeizuhxlqnwcsfgnocdv
      pnokbmjeizuhxlqnwasfgtscdv
      pbowrmjeuzuhxlqnwasfgtycdw
      pbokrmjeiyuhxlqnwasqgtvcdv
      pbokrmjeivuhxkpnwasfgtycdv
      pbokomjeizuhxlqnwasfgtylav
      pbdkrmjeizuhxlgnwjsfgtycdv
      pbokrmjeizuaxxqnwasfytycdv
      pbokrmjerzuhxlqnwasfgtscdk
      pbokrmzerzuhxlqnwasfntycdv
      pbokrmjeizumxdqnwasfgtyckv
      pbtkrmjeizrhxlqnwasfgtjcdv
      pbmkrmjuizuhxlqnwasfgtytdv
      pbokpmjeizuhxlqnwastgtzcdv
      kbokrmjeizuhxlqnwasfgzjcdv`

      assert.equal(inventoryManagementSystem2(items), "fgij");
});

//    it('should properly calculate checksum with custom test input', () => {
//       const items = 
//       `pbopcmjeizuhxlqnwasfgtycdm
//       pjokrmjeizuhxlqnfasfguycdv
//       pbokrpjejkuhxlqnwasfgtycdv
//       sbokrmjeizuhxaqnwastgtycdv
//       pbokrmjeizuhxljnnasfgtycnv
//       pbokrqjeizuhxbqndasfgtycdv
//       bbokrmjeizuhxlqnwasfgtycfj
//       pbokrmjeisuhxlqnwasfzdycdv
//       pbokrmjefxuhxlqnwasfptycdv
//       pqokrmjenzuhxlqnwasfgtygdv
//       pbokrmjeizunklqnwassgtycdv
//       pbokrmjeizghxvqnkasfgtycdv
//       lboirmjeizuhxlqnwfsfgtycdv
//       pbofrmjeizuhalqnwasfgtyddv
//       pbokrmjeiguhplqcwasfgtycdv
//       pbokrmjeizzhxlqnwavfgtyctv
//       pbokrmjeizuhxlqnwaefgtycaj
//       pbokzmjedzuhxlqnwasfgtlcdv
//       pnokrmjegzuhxlbnwasfgtycdv
//       pbojrmjeizuhtlqniasfgtycdv
//       pbokxmiefzuhxlqnwasfgtycdv
//       pbokrmoeizuhxlqnpasngtycdv
//       abokrmjeezuhxlqnwasfdtycdv
//       pbokrmyeizugxlqnwasfgtycda
//       pbokdmjeizuhxlqnuatfgtycdv
//       psokrmjeiauhxlqnwasxgtycdv
//       pbokrmjeizuhxlqzwasfgtyzdy
//       pboktmjeizuhxnqndasfgtycdv
//       pbodrrjeizuhxlqnwasfgtycdb
//       pbokrmjekzuhxljnwasfgtycuv
//       pbokrmjnizuhllqnwawfgtycdv
//       prmkrmjeiwuhxlqnwasfgtycdv
//       pbokrmjeizkhxlenwajfgtycdv
//       pbofrmjeizuixlqnwasfgoycdv
//       gbhkrmjeizuhclqnwasfgtycdv
//       pbokrmweizuwxlqnwasfgtycyv
//       pbukrmjeizuhxlqnwasfgqhcdv
//       pbokxmjeizuhxlqnwasfgtecdu
//       pbokomjeizuhrlqnfasfgtycdv
//       bbokymjeizuhxlqnpasfgtycdv
//       pbodrmjeizuhxlqnwadfgtgcdv
//       zbokrljeipuhxlqnwasfgtycdv
//       pboermjeizuxxlqnwasfgtpcdv
//       pqbkrmjeizuhxlqnjasfgtycdv
//       pbokrmfeizuhxvqgwasfgtycdv
//       pbokrmjeizuhzlqnjasfdtycdv
//       rbofrmjeizkhxlqnwasfgtycdv
//       pbokrmseizubxlqnwasfgtycdy
//       pbocrmjeizuhxaqnwasfgtycda
//       pbokrmjeizuhxlqndakfgtscdv
//       pbokrrjeizuhxlqnwgshgtycdv
//       pbokrajeizuhxpqnwasrgtycdv
//       pbokrbjeizubxlqnwssfgtycdv
//       pbokemjhizuhxlqnwazfgtycdv
//       pbokrmjeizuhxlqntisfgtyrdv
//       pbokrmjwinuhxlqnwasfgkycdv
//       pypkrmjeizuhxlqtwasfgtycdv
//       pbokrmjeizuhxlqniasfrpycdv
//       pbokomjeizuhxlqnwasfgtgcdw
//       pbokrmjeizusplqnwxsfgtycdv
//       pbodrmueizxhxlqnwasfgtycdv
//       pbokwmjeizurxlqnwasfgtycdi
//       pbohrmjejzuhxlqnwasfgtycgv
//       pbokrmtqizuhxlqnwasfitycdv
//       ptozrmjeizuhylqnwasfgtycdv
//       pbokrmjtizuhxlqfwasfgtykdv
//       pbokrmpeizuhxnqmwasfgtycdv
//       pbokrmjeizujxlynwtsfgtycdv
//       dbokrmjeizuhxlqnwasngticdv
//       pbskrmjeizuhxlqnrasfttycdv
//       pbwkrmjerzuhxlqnwaslgtycdv
//       pboyrmceizuhxlqnwssfgtycdv
//       pbokpmjeizchxlqngasfgtycdv
//       pbokrmjenzuhxlqnwcsfgxycdv
//       pbxkrmjeizuhxlqnwadfgtyckv
//       pbqkrmjeizuhxlqnwasdgdycdv
//       pbokrmoeizdhxlqnwasfgtycqv
//       pbokrmjejzuhxlqnwksfgtycwv
//       pbfkrmjeieuhxlnnwasfgtycdv
//       pbokrmjeiuuhxlqnpalfgtycdv
//       pbokrmjeizunxyqnwasfgtdcdv
//       pbokrmjeazuhxrqnwasogtycdv
//       pbmkrmjeizuhxlqnwaufgtycdj
//       xbskrmjeipuhxlqnwasfgtycdv
//       tbokrujlizuhxlqnwasfgtycdv
//       xbokvmjeizuhxyqnwasfgtycdv
//       pbnhrmheizuhxlqnwasfgtycdv
//       pboorajrizuhxlqnwasfgtycdv
//       pbokrmjeizuhxminwusfgtycdv
//       pboqrmjeizuhxlqnwaslgtscdv
//       pgokrdjeizuhxlnnwasfgtycdv
//       pbokrmjeizuhxiqnwasvttycdv
//       pbokrmwnizuhzlqnwasfgtycdv
//       pbokrmjlizmhjlqnwasfgtycdv
//       pbwkrmjeizohxlqnwasfgtyzdv
//       pbykrmjmizwhxlqnmasfgtycdv
//       pbokrmjzizuhxeqnwasfgtpcdv
//       pbokrmjewzuhxzqnwasfgtybdv
//       pbokrmjeimupxlonwasfgtycdv
//       pbokrmjvizuhxlqnuasfgtycqv
//       pbokrmjeizjdxlqnwasfetycdv
//       pbofrmjeizurxlqnwasfztycdv
//       pbozrmjeizuhxxqpwasfgtycdv
//       pbovtmjeizuhxlqnwapfgtycdv
//       prokrmjeuzuhxlqnwasfgtycqv
//       ubokrmjeizuhxljnwasfgtdcdv
//       pboknmjepzuhxlqnwasogtycdv
//       pbokrmjaizuaxljnwasfgtycdv
//       pbdkrcjeizuhxlqnwasfgtvcdv
//       pbokymjeizuhxlqnwaxfgtyfdv
//       pbokrmjaizuhxlqnfasfgtyodv
//       pdekrmmeizuhxlqnwasfgtycdv
//       rbokrmjeizuuxlqnwasfgtycdj
//       pbokrmneifuhxlqiwasfgtycdv
//       pbokrmjeizlbxlunwasfgtycdv
//       pbokrmjewzuhxxqnwasfgoycdv
//       pbokrmjeizuhxlqtwasfgtzcdo
//       pbokrmkeizzhxlqnwasfgtycmv
//       pbokrmjeiquhxlqnywsfgtycdv
//       xbokrmjeizjhxlqdwasfgtycdv
//       pbokrmjeizahxzqnzasfgtycdv
//       pbokrmjeizuhxmqmwasfgtytdv
//       pbokrmheiluhxlqnwasfgoycdv
//       rbokrmjeizuhxlqnwaslgtycqv
//       pbbkzmjeizuhxvqnwasfgtycdv
//       pbokrmjeizudxlznwgsfgtycdv
//       pbokemjeizuhxlqnwascgtysdv
//       pbokrmjdizuexlgnwasfgtycdv
//       pbokzmjeizuhxlqnwnsfggycdv
//       pbokrmjeizuhxtqnwasfgiycdy
//       bbokrmjeizuhclunwasfgtycdv
//       pbtkrmjeieuhxlqnwasfgtycrv
//       pbokrmjeizutxlbnwasngtycdv
//       pbokrmjevzumxlqnwasfgtyydv
//       pbokrmjsizuhxlqowasfgtycyv
//       pbssrmjeizuhxlqbwasfgtycdv
//       pbokrmjeizuhflqnwxsfstycdv
//       pbokimjeizuhxlqnwasfgtywdm
//       pbokrmjbizuhxlqdwasfgtygdv
//       pbokrmheizuhxlqxwasfgtycnv
//       poakrmjeizuhylqnwasfgtycdv
//       vbrkrmjeizuhxlqnwaszgtycdv
//       pbokrmjeizuhxiqnudsfgtycdv
//       pbokrldeizuhxlqnwasjgtycdv
//       pbokrmjeizjhflqnwasfgtymdv
//       pbokrmjeizuhxliawasfgtvcdv
//       pbokrmjeisuhtoqnwasfgtycdv
//       nbokrijeizuhxlqnwasfgtycdh
//       pbokrmjeizrhxlqnwxsfztycdv
//       pbotrmjeizuhxlcnwasfgtyvdv
//       pbokrmjewzuhxlquwasfgtjcdv
//       pbosrmjeipuhxlqnwasfgtvcdv
//       pbokrmjebzurxlunwasfgtycdv
//       pbogimieizuhxlqnwasfgtycdv
//       pbokrmjeizihxlqnwasagtyzdv
//       pbokrmjeizuoxlqnausfgtycdv
//       pbokrmjeizuhxlqnwashgbjcdv
//       pbokrdjeizuhxlnnwasfgoycdv
//       pbokrzjtizlhxlqnwasfgtycdv
//       peokrmjexzuhxlqnwasfgoycdv
//       cboprmjeizuhxlqnwasfgfycdv
//       pbitrmjeizjhxlqnwasfgtycdv
//       pbourmjeizuhxldnwjsfgtycdv
//       pboivmjeizuhxlqnwasvgtycdv
//       pbokrmjeiduhxaqnqasfgtycdv
//       pbokicjeiwuhxlqnwasfgtycdv
//       pbokrmmeizulxlqnwasfgtyvdv
//       pbokrmjeieuhxlqnaapfgtycdv
//       pbokxmjeiuuhxlqnwasfgtyqdv
//       pbokrmjeizuhxgqniaslgtycdv
//       pbokrmjeizuuxlqnwisfgtyckv
//       pbovlmjepzuhxlqnwasfgtycdv
//       pbokrmjeizuhxlqdwaqfgtycdj
//       pbztrvjeizuhxlqnwasfgtycdv
//       pbokrmjeizuholunwasfptycdv
//       pbokrmjeizudxlqnwusfgtycqv
//       nbokrmjzizmhxlqnwasfgtycdv
//       pbokrmjeypunxlqnwasfgtycdv
//       pbokrjjxizuhxlqnwasfgtyddv
//       pbokrmjeizuhilqnwiufgtycdv
//       pbokrmjeizuhxtqowasfgfycdv
//       qbokrgjeizuhxlqnwasfgtycdx
//       pvoarmjeizuhxlqnwasfgtfcdv
//       pbokrmjjizuhxlqnwasfggyczv
//       pbtkrmjeizuhnlqncasfgtycdv
//       pbokrmjeizuzxlqnwasfgtyjnv
//       jmokrmzeizuhxlqnwasfgtycdv
//       pbykrmjmizwhxlqnwasfgtycdv
//       nbokrmjeizlhxlqnwasfgtecdv
//       pbokrmjeizuhxlqhwasrgrycdv
//       pbokrmjeiruhxlqnwasfgtnedv
//       pbokrmjeizohxlznwasfgtycuv
//       paokrmjdizuhxlqnwasfktycdv
//       pbokrmjetzutxlqnwasfntycdv
//       pboyrmjeizuhxlqnwasfgtetdv
//       pbokgujeizuhxlqwwasfgtycdv
//       pbokrifeizshxlqnwasfgtycdv
//       sbokrmjeizfhxlqnaasfgtycdv
//       pbokrmjeizuhxlqpwrsfgfycdv
//       pbokxmjeikuhxlqnwasfctycdv
//       fbokrmjhizuhxlqnmasfgtycdv
//       pbekamjeizuhxlqnwaxfgtycdv
//       pboksmpeizuhxlqnwasfgtyclv
//       pbokrmjeizrhxdqnwasfgzycdv
//       pbogrmxeizurxlqnwasfgtycdv
//       pbokrmjeieuhxlqnwqsfgtychv
//       vbokrmjeizuhxlqnwabfgtycdq
//       lbokrmjeizupxlqvwasfgtycdv
//       pbokrmjeizuhglqnuasfgtucdv
//       hbokrmjeizuhelqnwasfgtrcdv
//       pbokrmweizuhxlqnwhsfgtyvdv
//       pbokrmjeizuhxrqnwasfvtccdv
//       pbokrmneizuhxlwnyasfgtycdv
//       ybokymjeqzuhxlqnwasfgtycdv
//       pbousmjeizuhxlqswasfgtycdv
//       pblkimjeizuhxlqnwacfgtycdv
//       psokrmjeizuhxlqnwasfgbpcdv
//       peokrwjeizghxlqnwasfgtycdv
//       pbokrmjeizudxlqnwzsfrtycdv
//       pbotrmjezzxhxlqnwasfgtycdv
//       pkokrmjezzuhxlqnwasfgtycdh
//       pbokrmleizuhxlnnwasfgtyndv
//       pboxwmjeituhxlqnwasfgtycdv
//       pbokrmjeizoczlqnwasfgtycdv
//       pbokomjeizuhxlqnwhsfgtybdv
//       pbhwrmjeizuhxlqnwasfgpycdv
//       pbwkrmjeizuhxeqnwasfgtyidv
//       pbokrmjeizuhxlqnjasfgmicdv
//       tbokrgjeizuhxlqhwasfgtycdv
//       pbolrqjeizuhxlqnhasfgtycdv
//       pbogrhjeizbhxlqnwasfgtycdv
//       pbokrmjeizghxlqnwashgtycdx
//       pbokrmjeizuhrlqnwasfgthcrv
//       pbokrmjeizuhxlqnwfsngtacdv
//       pbokrmxeizuhxlqnwasfotyctv
//       pbokrmjeizuhxlqnwcsfgnocdv
//       pnokbmjeizuhxlqnwasfgtscdv
//       pbowrmjeuzuhxlqnwasfgtycdw
//       pbokrmjeiyuhxlqnwasqgtvcdv
//       pbokrmjeivuhxkpnwasfgtycdv
//       pbokomjeizuhxlqnwasfgtylav
//       pbdkrmjeizuhxlgnwjsfgtycdv
//       pbokrmjeizuaxxqnwasfytycdv
//       pbokrmjerzuhxlqnwasfgtscdk
//       pbokrmzerzuhxlqnwasfntycdv
//       pbokrmjeizumxdqnwasfgtyckv
//       pbtkrmjeizrhxlqnwasfgtjcdv
//       pbmkrmjuizuhxlqnwasfgtytdv
//       pbokpmjeizuhxlqnwastgtzcdv
//       kbokrmjeizuhxlqnwasfgzjcdv`

//       assert.equal(inventoryManagementSystem(items), 12);
//  }); 
});