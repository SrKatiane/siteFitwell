import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
const Horarios = () => {
  const horarios = [{
    hora: "06:45",
    segunda: "LOC PIS",
    terca: "",
    quarta: "LOC PIS",
    quinta: "",
    sexta: "LOC PIS",
    sabado: ""
  },{
    hora: "07:00",
    segunda: "",
    terca: "LOC PIS",
    quarta: "",
    quinta: "LOC PIS",
    sexta: "",
    sabado: ""
  }, {
    hora: "07:30",
    segunda: "COND",
    terca: "",
    quarta: "COND",
    quinta: "",
    sexta: "LOC PIS",
    sabado: ""
  },{
    hora: "07:45",
    segunda: "",
    terca: ["HIDROGINÁSTICA", "LOC PIS"],
    quarta: "",
    quinta: ["HIDROGINÁSTICA", "LOC PIS"],
    sexta: "",
    sabado: ""
  }, {
    hora: "08:15",
    segunda: "LOC PIS",
    terca: "",
    quarta: "LOC PIS",
    quinta: "",
    sexta: "",
    sabado: ""
  },{
    hora: "08:20",
    segunda: "",
    terca: "",
    quarta: "",
    quinta: "",
    sexta: "",
    sabado: "LOC PIS"
  }, {
    hora: "08:30",
    segunda: "",
    terca: ["LOC PIS", "NATAÇÃO ADULTO"],
    quarta: "",
    quinta: ["LOC PIS", "NATAÇÃO ADULTO"],
    sexta: "NATAÇÃO ADULTO INICIANTE",
    sabado: ""
  }, {
    hora: "09:00",
    segunda: "",
    terca: "",
    quarta: "",
    quinta: "",
    sexta: "",
    sabado: "NATAÇÃO BEBÊ III"
  }, {
    hora: "09:05",
    segunda: "LOC PIS",
    terca: "",
    quarta: "LOC PIS",
    quinta: "",
    sexta: "",
    sabado: ""
  }, {
    hora: "09:10",
    segunda: ["NATAÇÃO INFANTIL"],
    terca: "",
    quarta: ["NATAÇÃO INFANTIL"],
    quinta: "",
    sexta: ["NATAÇÃO INFANTIL", "LOC PIS"],
    sabado: ""
  },{
    hora: "09:15",
    segunda: "",
    terca: ["NATAÇÃO INFANTIL", "TREIN. MIRIM"],
    quarta: "",
    quinta: ["NATAÇÃO INFANTIL", "TREIN. MIRIM"],
    sexta: "",
    sabado: ""
  }, {
    hora: "09:16",
    segunda: "",
    terca: "",
    quarta: "",
    quinta: ["PERSONAL ADAP I"],
    sexta: "",
    sabado: ""
  },{
    hora: "09:30",
    segunda: "",
    terca: "",
    quarta: "",
    quinta: "",
    sexta: "",
    sabado: "NATAÇÃO BEBÊ II"
  }, {
    hora: "09:45",
    segunda: "",
    terca: "",
    quarta: "",
    quinta: "LOC PIS",
    sexta: "",
    sabado: ""
  },{
    hora: "09:50",
    segunda: [ "NATAÇÃO INFANTIL", "LOC PIS"],
    terca: "",
    quarta: ["NATAÇÃO INFANTIL", "LOC PIS"],
    quinta: "",
    sexta: ["NATAÇÃO INFANTIL", "LOC PIS"],
    sabado: ""
  }, {
    hora: "10:00",
    segunda: "",
    terca: ["NATAÇÃO INFANTIL"],
    quarta: "",
    quinta: ["NATAÇÃO INFANTIL"],
    sexta: "",
    sabado: ["LOC PIS (2 raias)", "ADAP II"]
  }, {
    hora: "10:30",
    segunda: ["NATAÇÃO INFANTIL", "LOC PIS"],
    terca: ["NATAÇÃO INFANTIL", "LOC PIS"],
    quarta: ["NATAÇÃO INFANTIL", "LOC PIS"],
    quinta: ["LOC PIS"],
    sexta: ["NATAÇÃO INFANTIL", "LOC PIS"],
    sabado: ""
  }, {
    hora: "10:40",
    segunda: "",
    terca: ["NATAÇÃO BEBÊS III"],
    quarta: "",
    quinta: ["NATAÇÃO BEBÊS III"],
    sexta: "",
    sabado: "NATAÇÃO INFANTIL"
  }, {
    hora: "10:45",
    segunda: "",
    terca: "",
    quarta: "",
    quinta: "",
    sexta: "",
    sabado: "LOC PIS (2 raias)"
  },{
    hora: "11:10",
    segunda: ["LOC PIS", "NAT"],
    terca: "",
    quarta: ["LOC PIS", "NAT"],
    quinta: "",
    sexta: ["NATAÇÃO INFANTIL", "LOC PIS"],
    sabado: ""
  }, {
    hora: "11:15",
    segunda: "",
    terca:["NATAÇÃO ADULTO COND"],
    quarta: "",
    quinta: ["NATAÇÃO ADULTO COND"],
    sexta: "",
    sabado: ""
  }, {
    hora: "11:20",
    segunda: "",
    terca: "",
    quarta: "",
    quinta: "",
    sexta: "",
    sabado: "NATAÇÃO INFANTIL"
  },{
    hora: "12:00",
    segunda: "LOC PIS",
    terca: "LOC PIS",
    quarta: "LOC PIS",
    quinta: "LOC PIS",
    sexta: "",
    sabado: ""
  },{
    hora: "13:00",
    segunda: "",
    terca: "LOC PIS",
    quarta: "",
    quinta: "LOC PIS",
    sexta: "",
    sabado: ""
  },{
    hora: "14:00",
    segunda: "",
    terca: "LOC PIS",
    quarta: "",
    quinta: "LOC PIS",
    sexta: "",
    sabado: ""
  }, {
    hora: "14:45",
    segunda: "",
    terca:["HIDROGINÁSTICA", "LOC PIS"],
    quarta: "",
    quinta: ["HIDROGINÁSTICA", "LOC PIS"],
    sexta: "",
    sabado: ""
  }, {
    hora: "15:30",
    segunda: "LOC PIS",
    terca: ["NATAÇÃO INFANTIL", "LOC PIS"],
    quarta: "LOC PIS",
    quinta: ["NATAÇÃO INFANTIL", "LOC PIS"],
    sexta: "LOC PIS",
    sabado: ""
  }, {
    hora: "16:00",
    segunda: "RITMOS",
    terca: "",
    quarta: "",
    quinta: "",
    sexta: "",
    sabado: ""
  },{
    hora: "16:15",
    segunda: "",
    terca: "NATAÇÃO ADULTO COND",
    quarta: "",
    quinta: "NATAÇÃO ADULTO COND",
    sexta: "LOC PIS",
    sabado: ""
  }, {
    hora: "17:00",
    segunda: ["TREN"],
    terca: "LOC PIS",
    quarta: ["TREN", "LOC PIS"],
    quinta: "",
    sexta: "LOC PIS",
    sabado: ""
  },{
    hora: "17:05",
    segunda: "",
    terca: "",
    quarta: ["NATAÇÃO INICIANTE"],
    quinta: "",
    sexta: "",
    sabado: ""
  }, {
    hora: "17:10",
    segunda: ["NATAÇÃO INFANTIL"],
    terca: "",
    quarta: ["NATAÇÃO INFANTIL"],
    quinta: "",
    sexta: "",
    sabado: ""
  },{
    hora: "17:50",
    segunda: ["NATAÇÃO INFANTIL"],
    terca: "",
    quarta: ["NATAÇÃO INFANTIL"],
    quinta: "",
    sexta: ["NATAÇÃO INFANTIL"],
    sabado: ""
  },{
    hora: "18:00",
    segunda: "",
    terca: "FITDANCE",
    quarta: "",
    quinta: "FITDANCE",
    sexta: "",
    sabado: ""
  }, {
    hora: "18:30",
    segunda: ["TREIN"],
    terca: ["NATAÇÃO INFANTIL"],
    quarta: ["TREIN"],
    quinta: ["NATAÇÃO INFANTIL"],
    sexta: ["NATAÇÃO INFANTIL"],
    sabado: [""]
  }, {
    hora: "19:15",
    segunda: "HIDRO HIIT",
    terca: ["HIDROGINÁSTICA", "LOC PIS", "NATAÇÃO ADULTO COND"],
    quarta: ["HIDRO HIIT"],
    quinta: ["HIDROGINÁSTICA", "LOC PIS", "NATAÇÃO ADULTO COND"],
    sexta: "HIDRO HIIT",
    sabado: ""
  }, {
    hora: "18:00",
    segunda: "",
    terca: "FITDANCE",
    quarta: "",
    quinta: "FITDANCE",
    sexta: "",
    sabado: ""
  }, {
    hora: "20:00",
    segunda: "NATAÇÃO ADULTO INICIANTE",
    terca: "NATAÇÃO ADULTO COND",
    quarta: "NATAÇÃO ADULTO INICIANTE",
    quinta: "NATAÇÃO ADULTO COND",
    sexta: "LOC PIS",
    sabado: ""
  },{
    hora: "20:45",
    segunda: "",
    terca: "NATAÇÃO ADULTO INICIANTE",
    quarta: "",
    quinta: "NATAÇÃO ADULTO INICIANTE",
    sexta: "",
    sabado: ""
  }];
  const getActivityColor = (activity: string) => {
    if (activity.includes("NATAÇÃO ADULTO")) return "bg-blue-500 text-white";
    if (activity.includes("NATAÇÃO INFANTIL")) return "bg-cyan-400 text-black";
    if (activity.includes("NATAÇÃO BEBÊ")) return "bg-pink-500 text-white";
    if (activity.includes("HIDROGINÁSTICA")) return "bg-yellow-400 text-black";
    if (activity.includes("HIDRO HIIT")) return "bg-red-500 text-white";
    if (activity.includes("FITDANCE")) return "bg-green-600 text-white";
    if (activity.includes("APRENDIZ MISTO")) return "bg-cyan-300 text-black";
    return "bg-gray-100 text-gray-800";
  };
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-fitwell-dark to-fitwell-blue-light/80 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <Clock className="w-12 h-12 text-fitwell-orange inline mr-4" />
              <span className="text-fitwell-orange">Horários</span> das Atividades
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Confira os horários de todas as nossas modalidades
            </p>
            
            
          </div>
        </div>
      </section>

      {/* Tabela de Horários */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-fitwell-orange text-white">
                  <th className="border border-gray-300 p-3 text-left font-semibold">Horários</th>
                  <th className="border border-gray-300 p-3 text-center font-semibold">Segunda Feira</th>
                  <th className="border border-gray-300 p-3 text-center font-semibold">Terça Feira</th>
                  <th className="border border-gray-300 p-3 text-center font-semibold">Quarta Feira</th>
                  <th className="border border-gray-300 p-3 text-center font-semibold">Quinta Feira</th>
                  <th className="border border-gray-300 p-3 text-center font-semibold">Sexta Feira</th>
                  <th className="border border-gray-300 p-3 text-center font-semibold">Sábado</th>
                </tr>
              </thead>
              <tbody>
                {horarios.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold bg-fitwell-orange text-white text-center">
                      {item.hora}
                    </td>
                    {/* Segunda */}
                    <td className="border border-gray-300 p-2">
                      {Array.isArray(item.segunda)
                        ? item.segunda.map((act, i) => (
                            <div key={i} className={`${getActivityColor(act)} p-2 rounded text-center text-sm font-semibold mb-1`}>
                              {act}
                            </div>
                          ))
                        : item.segunda && (
                            <div className={`${getActivityColor(item.segunda)} p-2 rounded text-center text-sm font-semibold`}>
                              {item.segunda}
                            </div>
                          )
                      }
                    </td>
                    {/* Terça */}
                    <td className="border border-gray-300 p-2">
                      {Array.isArray(item.terca)
                        ? item.terca.map((act, i) => (
                            <div key={i} className={`${getActivityColor(act)} p-2 rounded text-center text-sm font-semibold mb-1`}>
                              {act}
                            </div>
                          ))
                        : item.terca && (
                            <div className={`${getActivityColor(item.terca)} p-2 rounded text-center text-sm font-semibold`}>
                              {item.terca}
                            </div>
                          )
                      }
                    </td>
                    {/* Quarta */}
                    <td className="border border-gray-300 p-2">
                      {Array.isArray(item.quarta)
                        ? item.quarta.map((act, i) => (
                            <div key={i} className={`${getActivityColor(act)} p-2 rounded text-center text-sm font-semibold mb-1`}>
                              {act}
                            </div>
                          ))
                        : item.quarta && (
                            <div className={`${getActivityColor(item.quarta)} p-2 rounded text-center text-sm font-semibold`}>
                              {item.quarta}
                            </div>
                          )
                      }
                    </td>
                    {/* Quinta */}
                    <td className="border border-gray-300 p-2">
                      {Array.isArray(item.quinta)
                        ? item.quinta.map((act, i) => (
                            <div key={i} className={`${getActivityColor(act)} p-2 rounded text-center text-sm font-semibold mb-1`}>
                              {act}
                            </div>
                          ))
                        : item.quinta && (
                            <div className={`${getActivityColor(item.quinta)} p-2 rounded text-center text-sm font-semibold`}>
                              {item.quinta}
                            </div>
                          )
                      }
                    </td>
                    {/* Sexta */}
                    <td className="border border-gray-300 p-2">
                      {Array.isArray(item.sexta)
                        ? item.sexta.map((act, i) => (
                            <div key={i} className={`${getActivityColor(act)} p-2 rounded text-center text-sm font-semibold mb-1`}>
                              {act}
                            </div>
                          ))
                        : item.sexta && (
                            <div className={`${getActivityColor(item.sexta)} p-2 rounded text-center text-sm font-semibold`}>
                              {item.sexta}
                            </div>
                          )
                      }
                    </td>
                    {/* Sábado */}
                    <td className="border border-gray-300 p-2">
                      {Array.isArray(item.sabado)
                        ? item.sabado.map((act, i) => (
                            <div key={i} className={`${getActivityColor(act)} p-2 rounded text-center text-sm font-semibold mb-1`}>
                              {act}
                            </div>
                          ))
                        : item.sabado && (
                            <div className={`${getActivityColor(item.sabado)} p-2 rounded text-center text-sm font-semibold`}>
                              {item.sabado}
                            </div>
                          )
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Legenda das cores */}
          <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-fitwell-dark">Legenda das Atividades:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-sm">Natação Adulto</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-cyan-400 rounded"></div>
                <span className="text-sm">Natação Infantil</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-pink-500 rounded"></div>
                <span className="text-sm">Natação Bebê</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                <span className="text-sm">Hidroginástica</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-sm">Hidro HIIT</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-600 rounded"></div>
                <span className="text-sm">Fit Dance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-cyan-300 rounded"></div>
                <span className="text-sm">Aprendiz Misto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Horarios;