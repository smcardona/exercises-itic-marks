from lxml import etree
from sys import stdout

# Funció que imprimeix correctament el resultat de la cerca amb XPath en funció de si el resultat
# és un XML o bé un string, o bé una llista.
def printXML(xml):
    # si és string
    if type(xml) is etree._ElementUnicodeResult:
        print(xml)

    # si és xml, prettyprint
    elif type(xml) is etree._Element:
        et = etree.ElementTree(xml)
        et.write(stdout.buffer, pretty_print=True)

    # si és llista, un a un recursivament.
    elif type(xml) is list:
        if len(xml) == 0:
            print([])
        for x in xml:
            printXML(x)

    # error
    else:
        print("No es reconeix el tipus (", type(xml), ") de ", xml)


# Cargar el archivo XML
archivo_xml = etree.parse("ods.xml")

# Definir la expresión XPath
expresion_xpath = "//grup[@tipus='ambiental']/objectiu[position()<=2]//accio[position() <= 2] | //grup[@tipus='ambiental']/objectiu[3]//accio[1]" 

# Ejecutar la expresión XPath
resultados = archivo_xml.xpath(expresion_xpath)
# Imprimir los resultados
printXML(resultados)
