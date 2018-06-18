var storyContent = ﻿{"inkVersion":17,"root":[[{"#":"-> flucht.start"},{"->":"einfuehrung"},["done",{"#n":"g-0"}],null],"done",{"einfuehrung":[["ev","str","^Einführung","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Die Geschichte der Zauberei wurde seit jeher von den erfahrendsten und ehrwürdigsten Lehrern an dieser Schule gelehrt, und dies soll auch in Zukunft so bleiben. Um aber mit der fortschreitenden Technik weiterhin Schritt halten zu können, gibt es nun erste Versuche, einen Teil des Lehrplans in Form der sogenannten \"Elektronischen Daten Verarbeitung\" anzubieten.  Es liegt Ihnen, werter Schüler dieser Institution, mit diesem Tablet daher eine interaktive Lehrstunde zur \"Geschichte der Zauberei\" vor.","\n","^Gehen Sie besonnen und überlegt mit der neuen Technik um (ggf. sollten Sie sich auch noch handschriftliche Notizen etc. machen).","\n","ev","str","^Zum ersten Teil...","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n",{"->":"flucht"},{"#f":5}]}]}],{"#f":3}],"flucht":[{"->":".^.intro"},{"intro":[["^Seit jeher gilt die Flucht der Alberta Hoffstadter im Jahre 1388 vor den abtrünnigen Trollen als die verwegendste und geschickteste in der jüngeren Geschichte der Zauberei.","\n","^Ihr Weg führte sie auch durch die damals noch junge Hogwarts - Schule für Zauberei, genauer gesagt in den Turm der Wahrsagung.","\n","^Ihr Mut und ihre Tapferkeit, mit der sie ihren Häschern entgegentrat auf ihrer Suche nach Antworten, sind noch heute Vorbild und Inspiration ganzer Generationen junger Zauberinnen und Zauberer.","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":".^.^.g-0"},null],"g-0":["^Versuchen Sie, ebenso tapfer und mutig zu sein wie Alberta, und auch in größter Gefahr stets die richtigen Entscheidungen zu treffen!","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-1","flg":4},{"c-1":["\n",{"->":"flucht.start"},null]}]}],{"#f":3}],"erwischt":[["^DIE TROLLE! SIE KOMMEN IMMER NÄHER!","\n","^ICH - ICH KANN NICHT - WOHIN???","\n","ev","str","^nochmal versuchen...","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":".^.^.g-0"},null],"g-0":[{"->":"flucht.start"},null]}],{"#f":3}],"start":[["^Diese verflixten Trolle!  Wieso kann ich sie nicht abschütteln?","\n","^Seit Hogsmead sind sie mir auf den Fersen!","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":".^.^.g-0"},null],"g-0":["^Ich kann nicht mehr... meine Beine tun weh, ich bin komplett außer Atem...","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-1","flg":4},{"c-1":["\n",{"->":".^.^.^.g-1"},null]}],"g-1":["^Und wo ist dieser Wahrsagerturm? Ich muss dorthin... irgendwo weiter oben...","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-2","flg":4},{"c-2":["\n",{"->":".^.^.^.g-2"},null]}],"g-2":["^\"Wow: Ist das der berühmte Festsaal von Hogwarts?\"","\n",["ev",{"^->":"flucht.start.0.g-2.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^Gehe vorsichtig vor bis zur Tafel am Ende des Saales.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.start.0.g-2.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":2},{"s":["^Verstecke dich unter dem nahesten Tisch.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.start.0.g-2.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":2},{"s":["^Gehe zurück zur Eingangshalle.",{"->":"$r","var":true},null]}],{"c-3":["ev",{"^->":"flucht.start.0.g-2.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^Auf halbem Wege hörst du, wie etwas schweres gegen die Eingangstore schlägt.","\n",[["ev",{"^->":"flucht.start.0.g-2.c-3.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Gehe weiter zum Ende des Saales.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.start.0.g-2.c-3.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Gehe zurück zum Eingang des Festsaales.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.start.0.g-2.c-3.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"flucht.start.0.g-2.c-3.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"g-0":["^Die Tore geben nach und schwingen mit einem Knirschen auf. Vier Trolle stehen in der Eingangshalle und schauen in meine Richtung!!!","\n",[["ev",{"^->":"flucht.start.0.g-2.c-3.9.g-0.2.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Verstecke dich unter dem nahesten Tisch.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.start.0.g-2.c-3.9.g-0.2.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Renne zum Ende des Saales.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.start.0.g-2.c-3.9.g-0.2.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"flucht.start.0.g-3"},null],"c-1":["ev",{"^->":"flucht.start.0.g-2.c-3.9.g-0.2.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"flucht.start.0.g-3"},null]}],null]}],null],"c-4":["ev",{"^->":"flucht.start.0.g-2.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^Die Tore geben nach und schwingen mit einem Knirschen auf. Vier Trolle stehen in der Eingangshalle und schauen in meine Richtung!!!","\n",[["ev",{"^->":"flucht.start.0.g-2.c-4.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Sie können mich wittern!!!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.start.0.g-2.c-4.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"flucht.erwischt"},{"->":".^.^.^.^.^.g-3"},null]}],null],"c-5":["ev",{"^->":"flucht.start.0.g-2.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^Etwas schweres schlägt gegen die Eingangstore!","\n",[["ev",{"^->":"flucht.start.0.g-2.c-5.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Renne zur großen Treppe in der Eingangshalle",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.start.0.g-2.c-5.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Renne zum Eingangstor",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.start.0.g-2.c-5.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"flucht.treppe"},{"->":".^.^.^.^.^.g-3"},null],"c-1":["ev",{"^->":"flucht.start.0.g-2.c-5.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Die Tore geben nach und schwingen mit einem Knirschen auf. Vier Trolle stehen in der Eingangshalle und schauen in meine Richtung!!!","\n",{"->":".^.^.^.^.^.g-3"},null]}],null]}],"g-3":[{"->":"flucht.erwischt"},null]}],{"#f":3}],"treppe":[["^Die Tore geben nach und schwingen mit einem Knirschen auf. Vier Trolle stehen in der Eingangshalle und schauen in meine Richtung!!!","\n",["ev",{"^->":"flucht.treppe.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^EXPELIARMUS!",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.treppe.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^STUPOR!",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.treppe.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Renne die Treppe empor!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.treppe.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^Die Trolle schauen sich verdutzt an: sie haben doch gar keine Waffen?!","\n",{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"flucht.treppe.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^Die Trolle schwanken und müssen sich gegenseitig stützen.","\n",[["ev",{"^->":"flucht.treppe.0.c-1.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^EXPELIARMUS!",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.treppe.0.c-1.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Ich laufe die Treppe hinauf.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.treppe.0.c-1.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^Kein Effekt! Sie schwanken immer noch...","\n",[["ev",{"^->":"flucht.treppe.0.c-1.9.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Renne weiter!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.treppe.0.c-1.9.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"g-0":[{"->":"flucht.flur"},{"->":".^.^.^.^.g-0"},null]}],null],"c-1":["ev",{"^->":"flucht.treppe.0.c-1.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"g-0":[{"->":"flucht.flur"},{"->":".^.^.^.^.g-0"},null]}],null],"c-2":["ev",{"^->":"flucht.treppe.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^Trolle sind ganz schön schnell, wenn sie in einer geraden Linie laufen können.","\n","^Sie sind plötzlich direkt hinter mir!!!","\n",[["ev",{"^->":"flucht.treppe.0.c-2.11.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Renne weiter!",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.treppe.0.c-2.11.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^STUPOR!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.treppe.0.c-2.11.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"flucht.treppe.0.c-2.11.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Die Trolle schwanken und müssen sich gegenseitig stützen.","\n",[["ev",{"^->":"flucht.treppe.0.c-2.11.c-1.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Renne weiter!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.treppe.0.c-2.11.c-1.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.g-0"},null]}],null],"g-0":[{"->":"flucht.flur"},{"->":".^.^.^.^.g-0"},null]}],null],"g-0":[{"->":"flucht.erwischt"},null]}],{"#f":3}],"flur":["^Hinter mir das Keuchen der Trolle, die wohl nicht mitbekommen haben, wo ich hingelaufen bin...","\n",{"->":".^.^.ersterStock"},{"#f":3}],"ersterStock":[["^Vor mir die Flure im ersten Stock!","\n",["ev",{"^->":"flucht.ersterStock.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^weiter geradeaus",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.ersterStock.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^nach links durch die kleine Tür",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.ersterStock.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^nach rechts die Empore entlang",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.ersterStock.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^Hier sind die Lichter alle aus?!","\n","^Es ist kaum etwas zu erkennen; da!? war das ein Lichtschein vor mir im Gang?","\n",[["ev",{"^->":"flucht.ersterStock.0.c-0.11.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Ich untersuche den Lichtschein im Gang vor mir.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.ersterStock.0.c-0.11.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Ich versuche, die Fackeln wieder zu entzünden!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.ersterStock.0.c-0.11.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^NEIN! Das war der Helm eines Trolles. Ich bin fast in ihn hineingelaufen.","\n",{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"flucht.ersterStock.0.c-0.11.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Eine doofe Idee! Da vorne steht ein Troll mit dem Rücken zu mir. Zum Glück hat er mich nicht bemerkt.","\n",{"->":".^.^.g-0"},null],"g-0":["^Langsam schleiche ich mich wieder zurück...","\n",{"->":".^.^.^.^.^"},{"->":".^.^.^.^.g-0"},null]}],null],"c-1":["ev",{"^->":"flucht.ersterStock.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^Der Raum ist total finster.","\n",[["ev",{"^->":"flucht.ersterStock.0.c-1.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^LUMOS!",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.ersterStock.0.c-1.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Ich taste mich langsam vor!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.ersterStock.0.c-1.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^Eine doofe Idee! Da vorne steht ein Troll mit dem Rücken zu mir. Zum Glück hat er mich nicht bemerkt.","\n",{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"flucht.ersterStock.0.c-1.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Das wird so nichts, ich komme nicht schnell genug voran: ich gehe wieder zurück...","\n",{"->":".^.^.g-0"},null],"g-0":[{"->":".^.^.^.^.^"},{"->":".^.^.^.^.g-0"},null]}],null],"c-2":["ev",{"^->":"flucht.ersterStock.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^Die Trolle berappeln sich langsam und drehen plötzlich alle gleichzeitig ihre Köpfe in meine Richtung!","\n",[["ev",{"^->":"flucht.ersterStock.0.c-2.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Zurück zur Treppe!",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.ersterStock.0.c-2.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Weiter die Empore zur nächsten Treppe!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.ersterStock.0.c-2.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^NEIN! Die sind ja schneller als ich! Sie ...","\n",{"->":"flucht.erwischt"},{"->":".^.^.^.^.g-0"},null],"c-1":["ev",{"^->":"flucht.ersterStock.0.c-2.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Sie brüllen los!!","\n","^Ich muss hier weg!!!","\n",{"->":".^.^.^.^.g-0"},null]}],null],"g-0":["^Die Gemälden an den Wänden gestikulieren wild! Sie zeigen ständig in meine Richtung...","\n","^Wollen Sie die Trolle etwa weiter anstacheln?!","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-3","flg":4},{"c-3":["\n",{"->":".^.^.^.g-1"},null]}],"g-1":["^Nein. Sie wollen mich WARNEN. Der größte Troll ist ja genau hinter mir!!!","\n",["ev",{"^->":"flucht.ersterStock.0.g-1.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":2},{"s":["^Ich schreie vor Angst.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.ersterStock.0.g-1.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":2},{"s":["^Ich werfe mich zur Seite.",{"->":"$r","var":true},null]}],{"c-4":["ev",{"^->":"flucht.ersterStock.0.g-1.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"flucht.erwischt"},{"->":".^.^.^.g-2"},null],"c-5":["ev",{"^->":"flucht.ersterStock.0.g-1.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^BAMM! Die Trollfaust zertrümmert die Stufe, auf der ich gerade noch stand.","\n",[["ev",{"^->":"flucht.ersterStock.0.g-1.c-5.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Ich schlage den mächtigen Trollarm direkt neben mir!",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.ersterStock.0.g-1.c-5.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Ich hechte nach vorne auf den nächsten Treppenabsatz.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.ersterStock.0.g-1.c-5.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^AUTSCH! Meine Hand...","\n",{"->":"flucht.erwischt"},{"->":".^.^.^.^.^.g-2"},null],"c-1":["ev",{"^->":"flucht.ersterStock.0.g-1.c-5.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Der Troll ist kurz irritiert.","\n",{"->":".^.^.^.^.^.g-2"},null]}],null]}],"g-2":[{"->":"flucht.stufe"},null]}],{"#f":3}],"stufe":[[["ev",{"^->":"flucht.stufe.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Ich bitte die Gemälde um Hilfe.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.stufe.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Ich renne die nächste Treppe hoch.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.stufe.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^STUPOR!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.stufe.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^Okay, sie fangen an zu diskutieren... keine wirkliche Hilfe.","\n",{"->":".^.^.^"},{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"flucht.stufe.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-2":["ev",{"^->":"flucht.stufe.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^Der Troll schüttelt sich nur; vermutlich hat er sich an diesen Zauberspruch gewöhnt.","\n",{"->":".^.^.^"},{"->":".^.^.g-0"},null],"g-0":["^Ich spüre den Atem des Trolls!","\n","^Er stinkt furchtbar!","\n","^Aber was noch schlimmer ist: er ist nur eine (Troll-)Armlänge hinter mir!!!","\n",{"->":"flucht.stufe2"},null]}],{"#f":3}],"stufe2":[[["ev",{"^->":"flucht.stufe2.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Ich renne im Zickzack weiter.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.stufe2.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Ich nehme zwei Stufen auf einmal.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.stufe2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"flucht.stufe2.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Wieder BAMM! Diesmal so nahe, dass ich einen Schuh verliere!!!","\n",{"->":".^.^.^"},{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Es knirscht ohrenbetäubend, dann jault es nicht weniger laut, direkt hinter mir.","\n","^Ich wage es nicht, mich umzusehen und renne","\n",["ev",{"^->":"flucht.stufe2.0.g-0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^weiter...",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"flucht.stufe2.0.g-0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},null]}],"g-1":["^Auf dem nächsten Treppenabsatz schaue ich mich dann doch um:","\n","^der Troll ist weg!","\n","^Und die Treppe schwenkt noch quer durch das gesamte Treppenhaus und lässt die anderen Trolle auf einem einsamen Treppenabsatz zurück. Sie kratzen sich am Kopf oder anderen Körperteilen, während ihr Anführer sich verzweifelt dort festhält, wo eben noch die Treppe war.","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-3","flg":4},{"c-3":["\n",{"->":".^.^.^.g-2"},null]}],"g-2":["^Ich schaue mich um; da, dass muss die Wendeltreppe zum Wahrsagerturm sein.","\n","^Ich haste die schmalen Stufen hinauf, von den Trollen ist jetzt nichts mehr zu sehen.","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-4","flg":4},{"c-4":["\n",{"->":".^.^.^.g-3"},null]}],"g-3":["^Herzlichen Glückwunsch!","\n","^Sie haben dieses Kapitel erfolgreich absolviert.","\n","ev","str","^weiter zum nächsten Teil...","/str","/ev",{"*":".^.c-5","flg":20},{"c-5":["\n",{"->":"wahrsagerinnen"},{"#f":5}]}]}],{"#f":3}],"#f":3}],"wahrsagerinnen":[{"->":".^.ersteFrage"},{"ersteFrage":[["^Frage: In welchem Jahr fand das 3. Sizilianische Hexenkonzil statt?","\n",["ev",{"^->":"wahrsagerinnen.ersteFrage.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^987",{"->":"$r","var":true},null]}],["ev",{"^->":"wahrsagerinnen.ersteFrage.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^1201",{"->":"$r","var":true},null]}],["ev",{"^->":"wahrsagerinnen.ersteFrage.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^1202",{"->":"$r","var":true},null]}],["ev",{"^->":"wahrsagerinnen.ersteFrage.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^1499",{"->":"$r","var":true},null]}],["ev",{"^->":"wahrsagerinnen.ersteFrage.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":2},{"s":["^1688",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"wahrsagerinnen.ersteFrage.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"wahrsagerinnen.ersteFrage.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.konzilFrage"},{"->":".^.^.g-0"},null],"c-2":["ev",{"^->":"wahrsagerinnen.ersteFrage.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-3":["ev",{"^->":"wahrsagerinnen.ersteFrage.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-4":["ev",{"^->":"wahrsagerinnen.ersteFrage.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"g-0":["^Dies ist leider nicht richtig!","\n",{"->":".^.^.^"},null]}],{"#f":3}],"konzilFrage":[["^Frage: Was war das aussergewöhnliche an diesem Konzil?","\n",["ev",{"^->":"wahrsagerinnen.konzilFrage.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Es nahm keine einzige Hexe daran teil.",{"->":"$r","var":true},null]}],["ev",{"^->":"wahrsagerinnen.konzilFrage.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Während des gesamten Konzils hat es nur geregnet.",{"->":"$r","var":true},null]}],["ev",{"^->":"wahrsagerinnen.konzilFrage.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Bei einer Verhandlung hatten drei Wahrsagerinnen die gleiche Vision.",{"->":"$r","var":true},null]}],["ev",{"^->":"wahrsagerinnen.konzilFrage.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^Es wurde die Gründung der Hogwarts Schule für Zauberei bekanntgegeben.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"wahrsagerinnen.konzilFrage.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"wahrsagerinnen.konzilFrage.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-2":["ev",{"^->":"wahrsagerinnen.konzilFrage.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.aufgabe"},{"->":".^.^.g-0"},null],"c-3":["ev",{"^->":"wahrsagerinnen.konzilFrage.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"g-0":["^Dies ist leider nicht richtig!","\n",{"->":".^.^.^"},null]}],{"#f":3}],"aufgabe":[["^Die übereinstimmende Vision besagte, dass nur einer der Beschuldigten vor Gericht die Wahrheit sprach (Interessanterweise ist der eigentliche Gegenstand der Verhandlung nicht überliefert worden.)","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":".^.^.g-0"},null],"g-0":["^Die Aussagen der Beschuldigten Adams, Bertrand und Charles waren wie folgt:","\n","^Adams beschuldigte Bertrand.","\n","^Bertrand behauptete, Adams lügt.","\n","^Charles bestritt jegliche Schuld.","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-1","flg":4},{"c-1":["\n",{"->":".^.^.^.g-1"},null]}],"g-1":["^Frage: Wer hatte nun Schuld und welcher der Beschuldigten sparch die Wahrheit?","\n",["ev",{"^->":"wahrsagerinnen.aufgabe.0.g-1.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Adams / Bertrand",{"->":"$r","var":true},null]}],["ev",{"^->":"wahrsagerinnen.aufgabe.0.g-1.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^Adams / Charles",{"->":"$r","var":true},null]}],["ev",{"^->":"wahrsagerinnen.aufgabe.0.g-1.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":2},{"s":["^Bertrand / Adams",{"->":"$r","var":true},null]}],["ev",{"^->":"wahrsagerinnen.aufgabe.0.g-1.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":2},{"s":["^Bertrand / Charles",{"->":"$r","var":true},null]}],["ev",{"^->":"wahrsagerinnen.aufgabe.0.g-1.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":2},{"s":["^Charles / Adams",{"->":"$r","var":true},null]}],["ev",{"^->":"wahrsagerinnen.aufgabe.0.g-1.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-7","flg":2},{"s":["^Charles / Bertrand",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"wahrsagerinnen.aufgabe.0.g-1.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},null],"c-3":["ev",{"^->":"wahrsagerinnen.aufgabe.0.g-1.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},null],"c-4":["ev",{"^->":"wahrsagerinnen.aufgabe.0.g-1.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},null],"c-5":["ev",{"^->":"wahrsagerinnen.aufgabe.0.g-1.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.^.richtig"},{"->":".^.^.^.g-2"},null],"c-6":["ev",{"^->":"wahrsagerinnen.aufgabe.0.g-1.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},null],"c-7":["ev",{"^->":"wahrsagerinnen.aufgabe.0.g-1.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},null]}],"g-2":["^Dies ist leider nicht richtig!","\n","^Arbeiten Sie das Kapitel am besten nochmal durch...","\n",{"->":".^.^.^.^.ersteFrage"},null]}],{"#f":3}],"richtig":[["^Herzlichen Glückwunsch!","\n","^Sie haben dieses Kapitel erfolgreich absolviert.","\n","ev","str","^weiter zum nächsten Teil...","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n","done",null]}],{"#f":3}],"#f":3}],"#f":3}],"listDefs":{}};
