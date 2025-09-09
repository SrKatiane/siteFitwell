import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  useEffect(() => {
    // For now, we'll add a placeholder for the Mapbox token
    // Users need to add their Mapbox public token here
    const token = 'pk.eyJ1IjoiZml0d2VsbCIsImEiOiJjbTI1ZjFhc2oxOTEyMmpzZHA3aXg4d3UwIn0.placeholder';
    setMapboxToken(token);
  }, []);
  useEffect(() => {
    if (!mapContainer.current || !mapboxToken || map.current) return;

    // Set the access token (placeholder for now)
    mapboxgl.accessToken = mapboxToken;

    // Initialize map centered on São Paulo (example coordinates)
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-46.6333, -23.5505],
      // São Paulo coordinates
      zoom: 15
    });

    // Add a marker for Fitwell location
    new mapboxgl.Marker({
      color: '#FF6B35' // fitwell-orange color
    }).setLngLat([-46.6333, -23.5505]).addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);
  if (!mapboxToken) {
    return <div className="w-full h-full bg-fitwell-orange-lighter/30 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-fitwell-orange mx-auto mb-2" />
          <p className="text-fitwell-dark/70">Carregando mapa...</p>
          <p className="text-xs text-fitwell-dark/50 mt-1">
            Configure seu token do Mapbox para ver o mapa
          </p>
        </div>
      </div>;
  }
  return <div ref={mapContainer} className="w-full h-full" />;
};
const ConviteVisitaSection = () => {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fitwell-dark mb-4">
            Quer conhecer a <span className="text-fitwell-orange">Fitwell</span> de perto?
          </h2>
          <p className="text-xl text-fitwell-dark/70 max-w-2xl mx-auto">
            Agende uma visita ou experimente uma aula grátis! Venha sentir a energia e o carinho que só a Fitwell oferece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Visit Options */}
          <div className="space-y-6">
            <Card className="border-2 border-fitwell-orange/20 hover:border-fitwell-orange/40 transition-all duration-300 my-[10px]">
              <CardContent className="p-8 my-[10px]">
                <div className="text-center">
                  <div className="bg-fitwell-orange rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-fitwell-dark mb-3">
                    Visita Guiada
                  </h3>
                  <p className="text-fitwell-dark/70 mb-6">
                    Conheça todas as nossas instalações, equipamentos e modalidades com um de nossos profissionais.
                  </p>
                  <Button variant="fitwell" size="lg" className="w-full">
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Visita
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-fitwell-blue-light/20 hover:border-fitwell-blue-light/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="bg-fitwell-blue-light rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-fitwell-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-fitwell-dark mb-3">
                    Aula Experimental
                  </h3>
                  <p className="text-fitwell-dark/70 mb-6">
                    Participe de uma aula gratuita da modalidade de sua escolha e sinta na prática a diferença.
                  </p>
                  <Button variant="fitwell-blue" size="lg" className="w-full">
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Aula Grátis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="bg-fitwell-orange-lighter/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-fitwell-dark mb-6 text-center">
              Entre em Contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-fitwell-orange rounded-full w-12 h-12 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-fitwell-dark">Telefone/WhatsApp</h4>
                  <p className="text-fitwell-dark/70">(54) 98128-6867</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-fitwell-blue-light rounded-full w-12 h-12 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-fitwell-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-fitwell-dark">Endereço</h4>
                  <p className="text-fitwell-dark/70">R. Martinho Lutero, 260 - Serrano<br />Canela - RS</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-fitwell-dark rounded-full w-12 h-12 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-fitwell-dark">Horário de Funcionamento</h4>
                  <p className="text-fitwell-dark/70">
                    Segunda a Sexta: 6h às 13:00h – 15:00h às 21:30h<br />
                    Sábados: 08:30h às 12:00h<br />
                  </p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-6">
              
              <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-fitwell-orange/20">
                <MapComponent />
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>;
};
export default ConviteVisitaSection;