var storyContent = ﻿{"inkVersion":17,"root":[["\n","\n","\n",{"->":"einfuehrung"},"^<b>Shortcuts</b>","\n",["ev",{"^->":"0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":2},{"s":["^regulärer Start",{"->":"$r","var":true},null]}],["ev",{"^->":"0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":2},{"s":["^Konzil",{"->":"$r","var":true},null]}],["ev",{"^->":"0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-2","flg":2},{"s":["^Flucht",{"->":"$r","var":true},null]}],["ev",{"^->":"0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-3","flg":2},{"s":["^Teesatz lesen",{"->":"$r","var":true},null]}],["ev",{"^->":"0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-4","flg":2},{"s":["^Ende",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.6.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-0"},null],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.7.s"},[{"#n":"$r2"}],"\n",{"->":"konzil"},{"->":"0.g-0"},null],"c-2":["ev",{"^->":"0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":"0.8.s"},[{"#n":"$r2"}],"\n",{"->":"flucht"},{"->":"0.g-0"},null],"c-3":["ev",{"^->":"0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":"0.9.s"},[{"#n":"$r2"}],"\n",{"->t->":"teesatz"},{"->":"ende"},{"->":"0.g-0"},null],"c-4":["ev",{"^->":"0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":"0.10.s"},[{"#n":"$r2"}],"\n",{"->":"ende"},{"->":"0.g-0"},null],"g-0":[{"->":"einfuehrung"},["done",{"#n":"g-1"}],null]}],"done",{"auszeichnung":[["^<p style=\"padding-top: 4em;\">&nbsp;</p>","\n","^<b>Herzlichen Glückwunsch!</b>","\n","^Sie haben dieses Kapitel erfolgreich absolviert.","\n","^<img src=\"assets/auszeichnung.jpg\" width=\"300\"></img>","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":".^.^.g-0"},null],"g-0":["^<p style=\"padding-top: 8em;\">&nbsp;</p>","\n","ev","void","/ev","->->",null]}],{"#f":3}],"einfuehrung":[["ev","str","^Einführung","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Die Geschichte der Zauberei wurde seit jeher von den erfahrendsten und ehrwürdigsten Lehrern an dieser Schule gelehrt, und dies soll auch in Zukunft so bleiben. Um aber mit der fortschreitenden Technik weiterhin Schritt halten zu können, gibt es nun erste Versuche, einen Teil des Lehrplans in Form der sogenannten \"Elektronischen Daten Verarbeitung\" anzubieten.  Es liegt Ihnen, werter Schüler dieser Institution, mit diesem Tablet daher eine interaktive Lehrstunde zur \"Geschichte der Zauberei\" vor.","\n","^Gehen Sie besonnen und überlegt mit der neuen Technik um (ggf. sollten Sie sich auch noch handschriftliche Notizen etc. machen).","\n","ev","str","^Zum ersten Kapitel...","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n","^<p style=\"padding-top: 4em;\">&nbsp;</p>","\n",{"->t->":"konzil"},{"->t->":"flucht"},{"->t->":"teesatz"},{"->":"ende"},{"#f":5}]}]}],{"#f":3}],"ende":["^8325","\n","done",{"#f":3}],"konzil":[{"->":".^.ersteFrage"},{"ersteFrage":[["^Frage: In welchem Jahr fand das 3. Sizilianische Hexenkonzil statt?","\n",["ev",{"^->":"konzil.ersteFrage.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^987",{"->":"$r","var":true},null]}],["ev",{"^->":"konzil.ersteFrage.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^1201",{"->":"$r","var":true},null]}],["ev",{"^->":"konzil.ersteFrage.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^1202",{"->":"$r","var":true},null]}],["ev",{"^->":"konzil.ersteFrage.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^1499",{"->":"$r","var":true},null]}],["ev",{"^->":"konzil.ersteFrage.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":2},{"s":["^1688",{"->":"$r","var":true},null]}],["ev",{"^->":"konzil.ersteFrage.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":2},{"s":["^Dieses Konzil gab es nicht.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"konzil.ersteFrage.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"konzil.ersteFrage.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-2":["ev",{"^->":"konzil.ersteFrage.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"konzil.konzilFrage"},{"->":".^.^.g-0"},null],"c-3":["ev",{"^->":"konzil.ersteFrage.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-4":["ev",{"^->":"konzil.ersteFrage.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-5":["ev",{"^->":"konzil.ersteFrage.0.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"g-0":["^Dies ist leider nicht richtig!","\n",{"->":".^.^.^"},null]}],{"#f":3}],"konzilFrage":[["^Frage: Was war das aussergewöhnliche an diesem Konzil?","\n",["ev",{"^->":"konzil.konzilFrage.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Es nahm keine einzige Hexe daran teil.",{"->":"$r","var":true},null]}],["ev",{"^->":"konzil.konzilFrage.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Während des gesamten Konzils hat es nur geregnet.",{"->":"$r","var":true},null]}],["ev",{"^->":"konzil.konzilFrage.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Bei einer Verhandlung hatten drei Wahrsagerinnen die gleiche Vision.",{"->":"$r","var":true},null]}],["ev",{"^->":"konzil.konzilFrage.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^Es wurde die Gründung der Hogwarts Schule für Zauberei bekanntgegeben.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"konzil.konzilFrage.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"konzil.konzilFrage.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-2":["ev",{"^->":"konzil.konzilFrage.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"konzil.aufgabe"},{"->":".^.^.g-0"},null],"c-3":["ev",{"^->":"konzil.konzilFrage.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"g-0":["^Dies ist leider nicht richtig!","\n",{"->":".^.^.^"},null]}],{"#f":3}],"aufgabe":[["^Die übereinstimmende Vision besagte, dass nur einer der Beschuldigten vor Gericht die Wahrheit sprach (Interessanterweise ist der eigentliche Gegenstand der Verhandlung nicht überliefert worden.)","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":".^.^.g-0"},null],"g-0":["^Die Aussagen der Beschuldigten Adams, Bertrand und Charles waren wie folgt:","\n","^Adams beschuldigte Bertrand.","\n","^Bertrand behauptete, Adams lügt.","\n","^Charles bestritt jegliche Schuld.","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-1","flg":4},{"c-1":["\n",{"->":".^.^.^.g-1"},null]}],"g-1":["^Frage: Wer hatte nun Schuld und welcher der Beschuldigten sparch die Wahrheit?","\n",["ev",{"^->":"konzil.aufgabe.0.g-1.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Adams / Bertrand",{"->":"$r","var":true},null]}],["ev",{"^->":"konzil.aufgabe.0.g-1.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^Adams / Charles",{"->":"$r","var":true},null]}],["ev",{"^->":"konzil.aufgabe.0.g-1.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":2},{"s":["^Bertrand / Adams",{"->":"$r","var":true},null]}],["ev",{"^->":"konzil.aufgabe.0.g-1.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":2},{"s":["^Bertrand / Charles",{"->":"$r","var":true},null]}],["ev",{"^->":"konzil.aufgabe.0.g-1.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":2},{"s":["^Charles / Adams",{"->":"$r","var":true},null]}],["ev",{"^->":"konzil.aufgabe.0.g-1.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-7","flg":2},{"s":["^Charles / Bertrand",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"konzil.aufgabe.0.g-1.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},null],"c-3":["ev",{"^->":"konzil.aufgabe.0.g-1.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},null],"c-4":["ev",{"^->":"konzil.aufgabe.0.g-1.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},null],"c-5":["ev",{"^->":"konzil.aufgabe.0.g-1.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"konzil.richtig"},{"->":".^.^.^.g-2"},null],"c-6":["ev",{"^->":"konzil.aufgabe.0.g-1.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},null],"c-7":["ev",{"^->":"konzil.aufgabe.0.g-1.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},null]}],"g-2":["^Dies ist leider nicht richtig!","\n","^Arbeiten Sie das Kapitel am besten nochmal durch...","\n",{"->":"konzil.ersteFrage"},null]}],{"#f":3}],"richtig":[{"->t->":"auszeichnung"},"ev","void","/ev","->->",{"#f":3}],"#f":3}],"flucht":[{"->":".^.intro"},{"intro":[["^Seit jeher gilt die Flucht der Alberta Hoffstadter im Jahre 1388 vor den abtrünnigen Trollen als die verwegendste und geschickteste in der jüngeren Geschichte der Zauberei.","\n","^Ihr Weg führte sie auch durch die damals noch junge Hogwarts - Schule für Zauberei, genauer gesagt in den Turm der Wahrsagung.","\n","^Ihr Mut und ihre Tapferkeit, mit der sie ihren Häschern entgegentrat auf ihrer Suche nach Antworten, sind noch heute Vorbild und Inspiration ganzer Generationen junger Zauberinnen und Zauberer.","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":".^.^.g-0"},null],"g-0":["^Versuchen Sie, ebenso tapfer und mutig zu sein wie Alberta, und auch in größter Gefahr stets die richtigen Entscheidungen zu treffen!","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-1","flg":4},{"c-1":["\n","^Alberta betritt den grossen Festsaal, durchnäßt und außer Atem...","\n",{"->":"flucht.start"},null]}]}],{"#f":3}],"erwischt":[["^DIE TROLLE! SIE KOMMEN IMMER NÄHER!","\n","^ICH - ICH KANN NICHT - WOHIN???","\n","ev","str","^nochmal versuchen...","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":".^.^.g-0"},null],"g-0":[{"->":"flucht.start"},null]}],{"#f":3}],"start":[["^\"Diese verflixten Trolle!  Wieso kann ich sie nicht abschütteln?","\n","^Seit Hogsmead sind sie mir auf den Fersen!\"","\n","^\"Ich kann nicht mehr... meine Beine tun weh... *hust*\"","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":".^.^.g-0"},null],"g-0":["^\"Und wo ist dieser Wahrsagerturm? Ich muss dorthin... irgendwo weiter oben...\"","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-1","flg":4},{"c-1":["\n",{"->":".^.^.^.g-1"},null]}],"g-1":["^\"Wow: Ist das der berühmte Festsaal von Hogwarts?\"","\n",["ev",{"^->":"flucht.start.0.g-1.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Gehe vorsichtig vor bis zur Tafel am Ende des Saales.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.start.0.g-1.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^Verstecke dich unter dem nahesten Tisch.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.start.0.g-1.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":2},{"s":["^Gehe zurück zur Eingangshalle.",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"flucht.start.0.g-1.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^Auf halbem Wege hörst du, wie etwas schweres gegen die Eingangstore schlägt.","\n",[["ev",{"^->":"flucht.start.0.g-1.c-2.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Gehe weiter zum Ende des Saales.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.start.0.g-1.c-2.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Gehe zurück zum Eingang des Festsaales.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.start.0.g-1.c-2.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"flucht.start.0.g-1.c-2.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"g-0":["^Die Tore geben nach und schwingen mit einem Knirschen auf. Vier Trolle stehen in der Eingangshalle und schauen in meine Richtung!!!","\n",[["ev",{"^->":"flucht.start.0.g-1.c-2.9.g-0.2.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Verstecke dich unter dem nahesten Tisch.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.start.0.g-1.c-2.9.g-0.2.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Renne zum Ende des Saales.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.start.0.g-1.c-2.9.g-0.2.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"flucht.start.0.g-2"},null],"c-1":["ev",{"^->":"flucht.start.0.g-1.c-2.9.g-0.2.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"flucht.start.0.g-2"},null]}],null]}],null],"c-3":["ev",{"^->":"flucht.start.0.g-1.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^Die Tore geben nach und schwingen mit einem Knirschen auf. Vier Trolle stehen in der Eingangshalle und schauen in meine Richtung!!!","\n",[["ev",{"^->":"flucht.start.0.g-1.c-3.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Sie können mich wittern!!!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.start.0.g-1.c-3.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"flucht.erwischt"},{"->":".^.^.^.^.^.g-2"},null]}],null],"c-4":["ev",{"^->":"flucht.start.0.g-1.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^Etwas schweres schlägt gegen die Eingangstore!","\n",[["ev",{"^->":"flucht.start.0.g-1.c-4.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Renne zur großen Treppe in der Eingangshalle",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.start.0.g-1.c-4.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Renne zum Eingangstor",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.start.0.g-1.c-4.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"flucht.treppe"},{"->":".^.^.^.^.^.g-2"},null],"c-1":["ev",{"^->":"flucht.start.0.g-1.c-4.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Die Tore geben nach und schwingen mit einem Knirschen auf. Vier Trolle stehen in der Eingangshalle und schauen in meine Richtung!!!","\n",{"->":".^.^.^.^.^.g-2"},null]}],null]}],"g-2":[{"->":"flucht.erwischt"},null]}],{"#f":3}],"treppe":[["^Die Tore geben nach und schwingen mit einem Knirschen auf. Vier Trolle stehen in der Eingangshalle und schauen in meine Richtung!!!","\n",["ev",{"^->":"flucht.treppe.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^EXPELIARMUS!",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.treppe.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^STUPOR!",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.treppe.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Renne die Treppe empor!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.treppe.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^Die Trolle schauen sich verdutzt an: sie haben doch gar keine Waffen?!","\n",{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"flucht.treppe.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^Die Trolle schwanken und müssen sich gegenseitig stützen.","\n",[["ev",{"^->":"flucht.treppe.0.c-1.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^EXPELIARMUS!",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.treppe.0.c-1.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Ich laufe die Treppe hinauf.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.treppe.0.c-1.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^Kein Effekt! Sie schwanken immer noch...","\n",[["ev",{"^->":"flucht.treppe.0.c-1.9.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Renne weiter!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.treppe.0.c-1.9.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"g-0":[{"->":"flucht.flur"},{"->":".^.^.^.^.g-0"},null]}],null],"c-1":["ev",{"^->":"flucht.treppe.0.c-1.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"g-0":[{"->":"flucht.flur"},{"->":".^.^.^.^.g-0"},null]}],null],"c-2":["ev",{"^->":"flucht.treppe.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^Trolle sind ganz schön schnell, wenn sie in einer geraden Linie laufen können.","\n","^Sie sind plötzlich direkt hinter mir!!!","\n",[["ev",{"^->":"flucht.treppe.0.c-2.11.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Renne weiter!",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.treppe.0.c-2.11.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^STUPOR!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.treppe.0.c-2.11.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"flucht.treppe.0.c-2.11.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Die Trolle schwanken und müssen sich gegenseitig stützen.","\n",[["ev",{"^->":"flucht.treppe.0.c-2.11.c-1.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Renne weiter!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.treppe.0.c-2.11.c-1.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.g-0"},null]}],null],"g-0":[{"->":"flucht.flur"},{"->":".^.^.^.^.g-0"},null]}],null],"g-0":[{"->":"flucht.erwischt"},null]}],{"#f":3}],"flur":["^Hinter mir das Keuchen der Trolle, die wohl nicht mitbekommen haben, wo ich hingelaufen bin...","\n",{"->":".^.^.ersterStock"},{"#f":3}],"ersterStock":[["^Vor mir die Flure im ersten Stock!","\n",["ev",{"^->":"flucht.ersterStock.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^weiter geradeaus",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.ersterStock.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^nach links durch die kleine Tür",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.ersterStock.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^nach rechts die Empore entlang",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.ersterStock.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^Hier sind die Lichter alle aus?!","\n","^Es ist kaum etwas zu erkennen; da!? war das ein Lichtschein vor mir im Gang?","\n",[["ev",{"^->":"flucht.ersterStock.0.c-0.11.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Ich untersuche den Lichtschein im Gang vor mir.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.ersterStock.0.c-0.11.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Ich versuche, die Fackeln wieder zu entzünden!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.ersterStock.0.c-0.11.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^NEIN! Das war der Helm eines Trolles. Ich bin fast in ihn hineingelaufen.","\n",{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"flucht.ersterStock.0.c-0.11.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Eine doofe Idee! Da vorne steht ein Troll mit dem Rücken zu mir. Zum Glück hat er mich nicht bemerkt.","\n",{"->":".^.^.g-0"},null],"g-0":["^Langsam schleiche ich mich wieder zurück...","\n",{"->":".^.^.^.^.^"},{"->":".^.^.^.^.g-0"},null]}],null],"c-1":["ev",{"^->":"flucht.ersterStock.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^Der Raum ist total finster.","\n",[["ev",{"^->":"flucht.ersterStock.0.c-1.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^LUMOS!",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.ersterStock.0.c-1.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Ich taste mich langsam vor!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.ersterStock.0.c-1.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^Eine doofe Idee! Da vorne steht ein Troll mit dem Rücken zu mir. Zum Glück hat er mich nicht bemerkt.","\n",{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"flucht.ersterStock.0.c-1.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Das wird so nichts, ich komme nicht schnell genug voran: ich gehe wieder zurück...","\n",{"->":".^.^.g-0"},null],"g-0":[{"->":".^.^.^.^.^"},{"->":".^.^.^.^.g-0"},null]}],null],"c-2":["ev",{"^->":"flucht.ersterStock.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^Die Trolle berappeln sich langsam und drehen plötzlich alle gleichzeitig ihre Köpfe in meine Richtung!","\n",[["ev",{"^->":"flucht.ersterStock.0.c-2.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Zurück zur Treppe!",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.ersterStock.0.c-2.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Weiter die Empore zur nächsten Treppe!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.ersterStock.0.c-2.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^NEIN! Die sind ja schneller als ich! Sie ...","\n",{"->":"flucht.erwischt"},{"->":".^.^.^.^.g-0"},null],"c-1":["ev",{"^->":"flucht.ersterStock.0.c-2.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Sie brüllen los!!","\n","^Ich muss hier weg!!!","\n",{"->":".^.^.^.^.g-0"},null]}],null],"g-0":["^Die Gemälden an den Wänden gestikulieren wild! Sie zeigen ständig in meine Richtung...","\n","^Wollen Sie die Trolle etwa weiter anstacheln?!","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-3","flg":4},{"c-3":["\n",{"->":".^.^.^.g-1"},null]}],"g-1":["^Nein. Sie wollen mich WARNEN. Der größte Troll ist ja genau hinter mir!!!","\n",["ev",{"^->":"flucht.ersterStock.0.g-1.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":2},{"s":["^Ich schreie vor Angst.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.ersterStock.0.g-1.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":2},{"s":["^Ich werfe mich zur Seite.",{"->":"$r","var":true},null]}],{"c-4":["ev",{"^->":"flucht.ersterStock.0.g-1.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"flucht.erwischt"},{"->":".^.^.^.g-2"},null],"c-5":["ev",{"^->":"flucht.ersterStock.0.g-1.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^BAMM! Die Trollfaust zertrümmert die Stufe, auf der ich gerade noch stand.","\n",[["ev",{"^->":"flucht.ersterStock.0.g-1.c-5.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Ich schlage den mächtigen Trollarm direkt neben mir!",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.ersterStock.0.g-1.c-5.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Ich hechte nach vorne auf den nächsten Treppenabsatz.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.ersterStock.0.g-1.c-5.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^AUTSCH! Meine Hand...","\n",{"->":"flucht.erwischt"},{"->":".^.^.^.^.^.g-2"},null],"c-1":["ev",{"^->":"flucht.ersterStock.0.g-1.c-5.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Der Troll ist kurz irritiert.","\n",{"->":".^.^.^.^.^.g-2"},null]}],null]}],"g-2":[{"->":"flucht.stufe"},null]}],{"#f":3}],"stufe":[[["ev",{"^->":"flucht.stufe.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Ich bitte die Gemälde um Hilfe.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.stufe.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Ich renne die nächste Treppe hoch.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.stufe.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^STUPOR!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.stufe.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^Okay, sie fangen an zu diskutieren... keine wirkliche Hilfe.","\n",{"->":".^.^.^"},{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"flucht.stufe.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-2":["ev",{"^->":"flucht.stufe.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^Der Troll schüttelt sich nur; vermutlich hat er sich an diesen Zauberspruch gewöhnt.","\n",{"->":".^.^.^"},{"->":".^.^.g-0"},null],"g-0":["^Ich spüre den Atem des Trolls!","\n","^Er stinkt furchtbar!","\n","^Aber was noch schlimmer ist: er ist nur eine (Troll-)Armlänge hinter mir!!!","\n",{"->":"flucht.stufe2"},null]}],{"#f":3}],"stufe2":[[["ev",{"^->":"flucht.stufe2.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Ich renne im Zickzack weiter.",{"->":"$r","var":true},null]}],["ev",{"^->":"flucht.stufe2.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Ich nehme zwei Stufen auf einmal.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flucht.stufe2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},null],"c-1":["ev",{"^->":"flucht.stufe2.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Wieder BAMM! Diesmal so nahe, dass ich einen Schuh verliere!!!","\n",{"->":".^.^.^"},{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Es knirscht ohrenbetäubend, dann jault es nicht weniger laut, direkt hinter mir.","\n","^Ich wage es nicht, mich umzusehen und renne","\n",["ev",{"^->":"flucht.stufe2.0.g-0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^weiter...",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"flucht.stufe2.0.g-0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},null]}],"g-1":["^Auf dem nächsten Treppenabsatz schaue ich mich dann doch um:","\n","^der Troll ist weg!","\n","^Und die Treppe schwenkt noch quer durch das gesamte Treppenhaus und lässt die anderen Trolle auf einem einsamen Treppenabsatz zurück. Sie kratzen sich am Kopf oder anderen Körperteilen, während ihr Anführer sich verzweifelt dort festhält, wo eben noch die Treppe war.","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-3","flg":4},{"c-3":["\n",{"->":".^.^.^.g-2"},null]}],"g-2":["^Ich schaue mich um; da, dass muss die Wendeltreppe zum Wahrsagerturm sein.","\n","^Ich haste die schmalen Stufen hinauf, von den Trollen ist zum Glück nichts mehr zu sehen.","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-4","flg":4},{"c-4":["\n",{"->":".^.^.^.g-3"},null]}],"g-3":[{"->t->":"auszeichnung"},"ev","void","/ev","->->",null]}],{"#f":3}],"#f":3}],"teesatz":[{"->":".^.intro"},{"falsch":["^Dies ist leider total falsch! Bitte beginnen Sie von vorne!","\n",{"->":".^.^.intro"},{"#f":3}],"intro":[["^Im Zimmer der Wahrsagerei...","\n","ev","str","^weiter...","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":".^.^.g-0"},null],"g-0":["^<p style=\"padding-top: 4em;\">&nbsp;</p>","\n","^<img src=\"assets/IMG_14251.JPG\" width=\"400\"></img>","\n",["ev",{"^->":"teesatz.intro.0.g-0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^\"Die Zukunft wird schlimmes bringen!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^\"Sie werden Erfolg haben!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^\"Jemand wird sterben!!!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":2},{"s":["^unleserlich",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"teesatz.intro.0.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},null],"c-2":["ev",{"^->":"teesatz.intro.0.g-0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},null],"c-3":["ev",{"^->":"teesatz.intro.0.g-0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},null],"c-4":["ev",{"^->":"teesatz.intro.0.g-0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"teesatz.falsch"},{"->":".^.^.^.g-1"},null]}],"g-1":["^<img src=\"assets/113.png\" width=\"400\"></img>","\n",["ev",{"^->":"teesatz.intro.0.g-1.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":2},{"s":["^\"Die Zukunft wird schlimmes bringen!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-1.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":2},{"s":["^\"Sie werden Erfolg haben!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-1.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-7","flg":2},{"s":["^\"Jemand wird sterben!!!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-1.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-8","flg":2},{"s":["^unleserlich",{"->":"$r","var":true},null]}],{"c-5":["ev",{"^->":"teesatz.intro.0.g-1.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"teesatz.falsch"},{"->":".^.^.^.g-2"},null],"c-6":["ev",{"^->":"teesatz.intro.0.g-1.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},null],"c-7":["ev",{"^->":"teesatz.intro.0.g-1.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},null],"c-8":["ev",{"^->":"teesatz.intro.0.g-1.c-8.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},null]}],"g-2":["^<img src=\"assets/Read-Your-Tea-Leaves.jpg\" width=\"400\"></img>","\n",["ev",{"^->":"teesatz.intro.0.g-2.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-9","flg":2},{"s":["^\"Die Zukunft wird schlimmes bringen!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-2.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-10","flg":2},{"s":["^\"Sie werden Erfolg haben!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-2.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-11","flg":2},{"s":["^\"Jemand wird sterben!!!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-2.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-12","flg":2},{"s":["^unleserlich",{"->":"$r","var":true},null]}],{"c-9":["ev",{"^->":"teesatz.intro.0.g-2.c-9.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-3"},null],"c-10":["ev",{"^->":"teesatz.intro.0.g-2.c-10.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-3"},null],"c-11":["ev",{"^->":"teesatz.intro.0.g-2.c-11.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"teesatz.falsch"},{"->":".^.^.^.g-3"},null],"c-12":["ev",{"^->":"teesatz.intro.0.g-2.c-12.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-3"},null]}],"g-3":["^<img src=\"assets/IMG_14251-2.JPG\" width=\"400\"></img>","\n",["ev",{"^->":"teesatz.intro.0.g-3.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-13","flg":2},{"s":["^\"Die Zukunft wird schlimmes bringen!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-3.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-14","flg":2},{"s":["^\"Sie werden Erfolg haben!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-3.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-15","flg":2},{"s":["^\"Jemand wird sterben!!!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-3.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-16","flg":2},{"s":["^unleserlich",{"->":"$r","var":true},null]}],{"c-13":["ev",{"^->":"teesatz.intro.0.g-3.c-13.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-4"},null],"c-14":["ev",{"^->":"teesatz.intro.0.g-3.c-14.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"teesatz.falsch"},{"->":".^.^.^.g-4"},null],"c-15":["ev",{"^->":"teesatz.intro.0.g-3.c-15.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-4"},null],"c-16":["ev",{"^->":"teesatz.intro.0.g-3.c-16.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-4"},null]}],"g-4":["^<img src=\"assets/Tea-Leaves.jpg\" width=\"400\"></img>","\n",["ev",{"^->":"teesatz.intro.0.g-4.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-17","flg":2},{"s":["^\"Die Zukunft wird schlimmes bringen!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-4.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-18","flg":2},{"s":["^\"Sie werden Erfolg haben!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-4.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-19","flg":2},{"s":["^\"Jemand wird sterben!!!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-4.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-20","flg":2},{"s":["^unleserlich",{"->":"$r","var":true},null]}],{"c-17":["ev",{"^->":"teesatz.intro.0.g-4.c-17.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-5"},null],"c-18":["ev",{"^->":"teesatz.intro.0.g-4.c-18.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-5"},null],"c-19":["ev",{"^->":"teesatz.intro.0.g-4.c-19.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-5"},null],"c-20":["ev",{"^->":"teesatz.intro.0.g-4.c-20.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-5"},null]}],"g-5":["^<img src=\"assets/maxresdefault-2.jpg\" width=\"400\"></img>","\n",["ev",{"^->":"teesatz.intro.0.g-5.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-21","flg":2},{"s":["^\"Die Zukunft wird schlimmes bringen!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-5.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-22","flg":2},{"s":["^\"Sie werden Erfolg haben!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-5.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-23","flg":2},{"s":["^\"Jemand wird sterben!!!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-5.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-24","flg":2},{"s":["^unleserlich",{"->":"$r","var":true},null]}],{"c-21":["ev",{"^->":"teesatz.intro.0.g-5.c-21.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-6"},null],"c-22":["ev",{"^->":"teesatz.intro.0.g-5.c-22.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-6"},null],"c-23":["ev",{"^->":"teesatz.intro.0.g-5.c-23.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-6"},null],"c-24":["ev",{"^->":"teesatz.intro.0.g-5.c-24.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-6"},null]}],"g-6":["^<img src=\"assets/smiles.jpg\" width=\"400\"></img>","\n",["ev",{"^->":"teesatz.intro.0.g-6.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-25","flg":2},{"s":["^\"Die Zukunft wird schlimmes bringen!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-6.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-26","flg":2},{"s":["^\"Sie werden Erfolg haben!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-6.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-27","flg":2},{"s":["^\"Jemand wird sterben!!!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"teesatz.intro.0.g-6.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-28","flg":2},{"s":["^unleserlich",{"->":"$r","var":true},null]}],{"c-25":["ev",{"^->":"teesatz.intro.0.g-6.c-25.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-7"},null],"c-26":["ev",{"^->":"teesatz.intro.0.g-6.c-26.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-7"},null],"c-27":["ev",{"^->":"teesatz.intro.0.g-6.c-27.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-7"},null],"c-28":["ev",{"^->":"teesatz.intro.0.g-6.c-28.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-7"},null]}],"g-7":[{"->t->":"auszeichnung"},"ev","void","/ev","->->",null]}],{"#f":3}],"#f":3}],"#f":3}],"listDefs":{}};
