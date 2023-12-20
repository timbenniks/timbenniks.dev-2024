import e from"./html.14085b69.js";import t from"./markdown.dc7ac4b6.js";import n from"./pug.550c9d26.js";import a from"./stylus.7adbd956.js";import i from"./sass.03357963.js";import s from"./css.f61fd02b.js";import u from"./scss.1820ab94.js";import m from"./less.08c7dba4.js";import r from"./javascript.b7d6d348.js";import o from"./typescript.24e7badf.js";import c from"./jsx.dd7ca5ce.js";import l from"./tsx.9ce70f16.js";import p from"./json.709f1c4d.js";import g from"./jsonc.277d5b70.js";import d from"./json5.b0f0796d.js";import b from"./yaml.b29e536f.js";import v from"./toml.d1d75bb8.js";import h from"./graphql.a37c4526.js";import"./ini.001c0d97.js";import"./java.f4171e82.js";import"./lua.701d5ceb.js";import"./c.3bba7a7c.js";import"./make.43b0cd2b.js";import"./perl.02674465.js";import"./xml.60e9fbf3.js";import"./sql.9c70927c.js";import"./r.024793cc.js";import"./ruby.be432bfe.js";import"./shellscript.e25d1410.js";import"./php.2711139f.js";import"./vb.2d602cc6.js";import"./xsl.743dfb5c.js";import"./bat.8122203b.js";import"./clojure.92d8f972.js";import"./coffee.fe546d68.js";import"./cpp.53580319.js";import"./glsl.e87908ab.js";import"./diff.22e0b108.js";import"./docker.f51a106f.js";import"./git-commit.b4350daa.js";import"./git-rebase.92d71456.js";import"./go.25269481.js";import"./groovy.16675b0d.js";import"./objective-c.89b5ece4.js";import"./swift.842602e4.js";import"./raku.28963d82.js";import"./powershell.3a90dc8f.js";import"./python.6d0dacef.js";import"./julia.5e2935e1.js";import"./rust.ae67b6bc.js";import"./scala.abe01632.js";import"./csharp.c8d18ee2.js";import"./fsharp.0f2895e2.js";import"./dart.e3cd5b0d.js";import"./handlebars.33790094.js";import"./erlang.b4742703.js";import"./elixir.905b2873.js";import"./latex.0cab722a.js";import"./tex.d31fa5f4.js";import"./haskell.4829cf11.js";import"./gnuplot.0e28179d.js";import"./bibtex.50d4a5d6.js";var f=[{$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",fileTypes:[],injectionSelector:"L:text.html.markdown",patterns:[{include:"#vue-code-block"}],repository:{"vue-code-block":{begin:"(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(vue)((\\s+|:|,|\\{|\\?)[^`~]*)?$)",name:"markup.fenced_code.block.markdown",end:"(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",beginCaptures:{3:{name:"punctuation.definition.markdown"},4:{name:"fenced_code.block.language.markdown"},5:{name:"fenced_code.block.language.attributes.markdown"}},endCaptures:{3:{name:"punctuation.definition.markdown"}},patterns:[{include:"source.vue"}]}},scopeName:"markdown.vue.codeblock",name:"vue-injection-markdown",injectTo:["text.html.markdown"]},{$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",fileTypes:[],injectionSelector:"L:meta.tag -meta.attribute -entity.name.tag.pug -attribute_value -source.tsx -source.js.jsx, L:meta.element -meta.attribute",patterns:[{include:"source.vue#vue-directives"}],scopeName:"vue.directives",name:"vue-directives",injectTo:["source.vue","text.html.markdown","text.html.derivative","text.pug"]},{$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",fileTypes:[],injectionSelector:"L:text.pug -comment -string.comment, L:text.html.derivative -comment.block, L:text.html.markdown -comment.block",patterns:[{include:"source.vue#vue-interpolations"}],scopeName:"vue.interpolations",name:"vue-interpolations",injectTo:["source.vue","text.html.markdown","text.html.derivative","text.pug"]},{$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",fileTypes:[],injectionSelector:"L:source.css -comment, L:source.postcss -comment, L:source.sass -comment, L:source.stylus -comment",patterns:[{include:"#vue-sfc-style-variable-injection"}],repository:{"vue-sfc-style-variable-injection":{begin:"\\b(v-bind)\\s*\\(",name:"vue.sfc.style.variable.injection.v-bind",end:"\\)",beginCaptures:{1:{name:"entity.name.function"}},patterns:[{begin:`('|")`,beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"}},end:"(\\1)",endCaptures:{1:{name:"punctuation.definition.tag.end.html"}},name:"source.ts.embedded.html.vue",patterns:[{include:"source.js"}]},{include:"source.js"}]}},scopeName:"vue.sfc.style.variable.injection",name:"vue-sfc-style-variable-injection",injectTo:["source.vue"]}];const y=Object.freeze({$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",name:"vue",scopeName:"source.vue",patterns:[{include:"text.html.basic#comment"},{include:"#self-closing-tag"},{begin:"(<)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"}},end:"(>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html.vue"}},patterns:[{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)md\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"text.html.markdown",patterns:[{include:"text.html.markdown"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)html\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"text.html.derivative",patterns:[{include:"#html-stuff"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)pug\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"text.pug",patterns:[{include:"text.pug"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)stylus\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.stylus",patterns:[{include:"source.stylus"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)postcss\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.postcss",patterns:[{include:"source.postcss"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)sass\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.sass",patterns:[{include:"source.sass"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)css\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.css",patterns:[{include:"source.css"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)scss\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.css.scss",patterns:[{include:"source.css.scss"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)less\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.css.less",patterns:[{include:"source.css.less"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)js\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.js",patterns:[{include:"source.js"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)ts\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.ts",patterns:[{include:"source.ts"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)jsx\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.js.jsx",patterns:[{include:"source.js.jsx"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)tsx\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.tsx",patterns:[{include:"source.tsx"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)json\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.json",patterns:[{include:"source.json"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)jsonc\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.json.comments",patterns:[{include:"source.json.comments"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)json5\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.json5",patterns:[{include:"source.json5"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)yaml\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.yaml",patterns:[{include:"source.yaml"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)toml\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.toml",patterns:[{include:"source.toml"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)(gql|graphql)\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.graphql",patterns:[{include:"source.graphql"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)vue\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.vue",patterns:[{include:"source.vue"}]}]},{begin:"(template)\\b",beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/template\\b)",name:"text.html.derivative",patterns:[{include:"#html-stuff"}]}]},{begin:"(script)\\b",beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/script\\b)",name:"source.js",patterns:[{include:"source.js"}]}]},{begin:"(style)\\b",beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/style\\b)",name:"source.css",patterns:[{include:"source.css"}]}]},{begin:"([a-zA-Z0-9:-]+)",beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"text"}]}]}],repository:{"self-closing-tag":{begin:"(<)([a-zA-Z0-9:-]+)(?=([^>]+/>))",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},end:"(/>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html.vue"}},name:"self-closing-tag",patterns:[{include:"#tag-stuff"}]},"template-tag":{patterns:[{include:"#template-tag-1"},{include:"#template-tag-2"}]},"template-tag-1":{begin:"(<)(template)\\b(>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"},3:{name:"punctuation.definition.tag.end.html.vue"}},end:"(/?>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html.vue"}},name:"meta.template-tag.start",patterns:[{begin:"\\G",end:"(?=/>)|((</)(template)\\b)",endCaptures:{2:{name:"punctuation.definition.tag.begin.html.vue"},3:{name:"entity.name.tag.$3.html.vue"}},name:"meta.template-tag.end",patterns:[{include:"#html-stuff"}]}]},"template-tag-2":{begin:"(<)(template)\\b",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},end:"(/?>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html.vue"}},name:"meta.template-tag.start",patterns:[{begin:"\\G",end:"(?=/>)|((</)(template)\\b)",endCaptures:{2:{name:"punctuation.definition.tag.begin.html.vue"},3:{name:"entity.name.tag.$3.html.vue"}},name:"meta.template-tag.end",patterns:[{include:"#tag-stuff"},{include:"#html-stuff"}]}]},"html-stuff":{patterns:[{include:"#template-tag"},{include:"text.html.derivative"},{include:"text.html.basic"}]},"tag-stuff":{begin:"\\G",end:"(?=/>)|(>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html.vue"}},name:"meta.tag-stuff",patterns:[{include:"#vue-directives"},{include:"text.html.basic#attribute"}]},"vue-directives":{patterns:[{include:"#vue-directives-control"},{include:"#vue-directives-style-attr"},{include:"#vue-directives-original"},{include:"#vue-directives-generic-attr"}]},"vue-directives-original":{begin:"(?:\\b(v-)|([:\\.])|(@)|(#))(\\[?)([\\w\\-]*)(\\]?)(?:\\.([\\w\\-]*))*",beginCaptures:{1:{name:"entity.other.attribute-name.html.vue"},2:{name:"punctuation.attribute-shorthand.bind.html.vue"},3:{name:"punctuation.attribute-shorthand.event.html.vue"},4:{name:"punctuation.attribute-shorthand.slot.html.vue"},5:{name:"punctuation.separator.key-value.html.vue"},6:{name:"entity.other.attribute-name.html.vue"},7:{name:"punctuation.separator.key-value.html.vue"},8:{name:"entity.other.attribute-name.html.vue"},9:{name:"punctuation.separator.key-value.html.vue"}},end:"(?=\\s*+[^=\\s])",endCaptures:{1:{name:"punctuation.definition.string.end.html.vue"}},name:"meta.attribute.directive.vue",patterns:[{include:"#vue-directives-expression"}]},"vue-directives-control":{begin:"(v-for)|(v-if|v-else-if|v-else)",captures:{1:{name:"keyword.control.loop.vue"},2:{name:"keyword.control.conditional.vue"}},end:"(?=\\s*+[^=\\s])",name:"meta.attribute.directive.control.vue",patterns:[{include:"#vue-directives-expression"}]},"vue-directives-expression":{patterns:[{begin:"(=)\\s*('|\"|`)",beginCaptures:{1:{name:"punctuation.separator.key-value.html.vue"},2:{name:"punctuation.definition.string.begin.html.vue"}},end:"(\\2)",endCaptures:{1:{name:"punctuation.definition.string.end.html.vue"}},patterns:[{begin:"(?<=('|\"|`))",end:"(?=\\1)",name:"source.ts.embedded.html.vue",patterns:[{include:"source.ts"}]}]},{begin:"(=)\\s*(?=[^'\"`])",beginCaptures:{1:{name:"punctuation.separator.key-value.html.vue"}},end:"(?=(\\s|>|\\/>))",patterns:[{begin:"(?=[^'\"`])",end:"(?=(\\s|>|\\/>))",name:"source.ts.embedded.html.vue",patterns:[{include:"source.ts"}]}]}]},"vue-directives-style-attr":{begin:"\\b(style)\\s*(=)",captures:{1:{name:"entity.other.attribute-name.html.vue"},2:{name:"punctuation.separator.key-value.html.vue"}},end:`(?<='|")`,name:"meta.attribute.style.vue",patterns:[{comment:"Copy from source.css#rule-list-innards",begin:`('|")`,beginCaptures:{1:{name:"punctuation.definition.string.begin.html.vue"}},end:"(\\1)",endCaptures:{1:{name:"punctuation.definition.string.end.html.vue"}},name:"source.css.embedded.html.vue",patterns:[{include:"source.css#comment-block"},{include:"source.css#escapes"},{include:"source.css#font-features"},{match:`(?x) (?<![\\w-])
--
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier
  |\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,name:"variable.css"},{begin:"(?<![-a-zA-Z])(?=[-a-zA-Z])",end:"$|(?![-a-zA-Z])",name:"meta.property-name.css",patterns:[{include:"source.css#property-names"}]},{comment:"Modify end to fix #199. TODO: handle ' character.",begin:"(:)\\s*",beginCaptures:{1:{name:"punctuation.separator.key-value.css"}},end:`\\s*(;)|\\s*(?='|")`,endCaptures:{1:{name:"punctuation.terminator.rule.css"}},contentName:"meta.property-value.css",patterns:[{include:"source.css#comment-block"},{include:"source.css#property-values"}]},{match:";",name:"punctuation.terminator.rule.css"}]}]},"vue-directives-generic-attr":{begin:"\\b(generic)\\s*(=)",captures:{1:{name:"entity.other.attribute-name.html.vue"},2:{name:"punctuation.separator.key-value.html.vue"}},end:`(?<='|")`,name:"meta.attribute.generic.vue",patterns:[{begin:`('|")`,beginCaptures:{1:{name:"punctuation.definition.string.begin.html.vue"}},end:"(\\1)",endCaptures:{1:{name:"punctuation.definition.string.end.html.vue"}},name:"meta.type.parameters.vue",comment:"https://github.com/microsoft/vscode/blob/fd4346210f59135fad81a8b8c4cea7bf5a9ca6b4/extensions/typescript-basics/syntaxes/TypeScript.tmLanguage.json#L4002-L4020",patterns:[{include:"source.ts#comment"},{name:"storage.modifier.ts",match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"},{include:"source.ts#type"},{include:"source.ts#punctuation-comma"},{name:"keyword.operator.assignment.ts",match:"(=)(?!>)"}]}]},"vue-interpolations":{patterns:[{begin:"(\\{\\{)",beginCaptures:{1:{name:"punctuation.definition.interpolation.begin.html.vue"}},end:"(\\}\\})",endCaptures:{1:{name:"punctuation.definition.interpolation.end.html.vue"}},name:"expression.embedded.vue",patterns:[{begin:"\\G",end:"(?=\\}\\})",name:"source.ts.embedded.html.vue",patterns:[{include:"source.ts"}]}]}]}},displayName:"Vue",embeddedLangs:["html","markdown","pug","stylus","sass","css","scss","less","javascript","typescript","jsx","tsx","json","jsonc","json5","yaml","toml","graphql"]});var Ze=[...e,...t,...n,...a,...i,...s,...u,...m,...r,...o,...c,...l,...p,...g,...d,...b,...v,...h,...f,y];export{Ze as default};
