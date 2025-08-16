import React, { useState } from 'react';
import { User, Package, Settings, Heart, MapPin, CreditCard, Bell, Shield, LogOut, Edit3, Camera } from 'lucide-react';

function MyAccount() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  const tabs = [
    { id: 'profile', label: 'Mi Perfil', icon: User },
    { id: 'orders', label: 'Mis Pedidos', icon: Package },
    { id: 'wishlist', label: 'Lista de Deseos', icon: Heart },
    { id: 'addresses', label: 'Direcciones', icon: MapPin },
    { id: 'payment', label: 'Métodos de Pago', icon: CreditCard },
    { id: 'notifications', label: 'Notificaciones', icon: Bell },
    { id: 'security', label: 'Seguridad', icon: Shield },
  ];

  const orders = [
    {
      id: '#KLP-2024-001',
      date: '15 Dic 2024',
      status: 'Entregado',
      total: 'S/ 450.00',
      items: 2,
      statusColor: 'text-green-600 bg-green-50'
    },
    {
      id: '#KLP-2024-002',
      date: '10 Dic 2024',
      status: 'En tránsito',
      total: 'S/ 280.00',
      items: 1,
      statusColor: 'text-blue-600 bg-blue-50'
    },
    {
      id: '#KLP-2024-003',
      date: '5 Dic 2024',
      status: 'Procesando',
      total: 'S/ 320.00',
      items: 3,
      statusColor: 'text-yellow-600 bg-yellow-50'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-8">
            {/* Profile Header */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E2D5]">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#3D2156]">Información Personal</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center space-x-2 px-4 py-2 bg-[#3D2156] text-white rounded-lg hover:bg-[#2A1A3E] transition-colors"
                >
                  <Edit3 size={16} />
                  <span>{isEditing ? 'Guardar' : 'Editar'}</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#3D2156] to-[#5A3A7A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    JD
                  </div>
                  <button 
                    className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-[#3D2156] hover:bg-gray-50 transition-colors"
                    aria-label="Cambiar foto de perfil"
                    title="Cambiar foto de perfil"
                  >
                    <Camera size={16} />
                  </button>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#3D2156] mb-1">Juan Pérez Delgado</h3>
                  <p className="text-gray-600">Miembro desde Enero 2024</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#3D2156] to-[#5A3A7A] text-white text-sm rounded-full">Explorador KALLPA</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                  <input
                    type="text"
                    defaultValue="Juan Pérez Delgado"
                    disabled={!isEditing}
                    title="Nombre completo"
                    className="w-full px-4 py-3 border border-[#E8E2D5] rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="juan.perez@email.com"
                    disabled={!isEditing}
                    title="Correo electrónico"
                    className="w-full px-4 py-3 border border-[#E8E2D5] rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    defaultValue="+51 987 654 321"
                    disabled={!isEditing}
                    title="Número de teléfono"
                    className="w-full px-4 py-3 border border-[#E8E2D5] rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de nacimiento</label>
                  <input
                    type="date"
                    defaultValue="1990-05-15"
                    disabled={!isEditing}
                    title="Fecha de nacimiento"
                    className="w-full px-4 py-3 border border-[#E8E2D5] rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E2D5]">
              <h3 className="text-xl font-semibold text-[#3D2156] mb-6">Preferencias de Aventura</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Actividades favoritas</label>
                  <div className="flex flex-wrap gap-2">
                    {['Trekking', 'Montañismo', 'Camping', 'Escalada'].map((activity) => (
                      <span key={activity} className="px-3 py-1 bg-[#F5F1E7] text-[#3D2156] rounded-full text-sm border border-[#E8E2D5]">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Talla preferida</label>
                  <select 
                    className="w-full px-4 py-3 border border-[#E8E2D5] rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent"
                    title="Talla preferida"
                  >
                    <option>M - Mediano</option>
                    <option>S - Pequeño</option>
                    <option>L - Grande</option>
                    <option>XL - Extra Grande</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 'orders':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E2D5]">
              <h2 className="text-2xl font-bold text-[#3D2156] mb-6">Historial de Pedidos</h2>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border border-[#E8E2D5] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="font-semibold text-[#3D2156]">{order.id}</h3>
                          <p className="text-sm text-gray-600">{order.date} • {order.items} artículo(s)</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-[#3D2156] text-lg">{order.total}</p>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 border border-[#3D2156] text-[#3D2156] rounded-lg hover:bg-[#3D2156] hover:text-white transition-colors">
                        Ver detalles
                      </button>
                      <button className="px-4 py-2 bg-[#F5F1E7] text-[#3D2156] rounded-lg hover:bg-[#E8E2D5] transition-colors">
                        Rastrear pedido
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'wishlist':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E2D5]">
            <h2 className="text-2xl font-bold text-[#3D2156] mb-6">Lista de Deseos</h2>
            <div className="text-center py-12">
              <Heart size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">Tu lista de deseos está vacía</h3>
              <p className="text-gray-500 mb-6">Guarda tus productos favoritos para comprarlos más tarde</p>
              <button className="px-6 py-3 bg-[#3D2156] text-white rounded-lg hover:bg-[#2A1A3E] transition-colors">
                Explorar productos
              </button>
            </div>
          </div>
        );

      case 'addresses':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E2D5]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#3D2156]">Direcciones de Envío</h2>
              <button className="px-4 py-2 bg-[#3D2156] text-white rounded-lg hover:bg-[#2A1A3E] transition-colors">
                Agregar dirección
              </button>
            </div>
            <div className="space-y-4">
              <div className="border border-[#E8E2D5] rounded-xl p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-[#3D2156] mb-2">Casa</h3>
                    <p className="text-gray-600">Av. Larco 123, Miraflores</p>
                    <p className="text-gray-600">Lima, Lima 15074</p>
                    <p className="text-gray-600">Perú</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Predeterminada
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      className="p-2 text-gray-400 hover:text-[#3D2156] transition-colors"
                      aria-label="Editar dirección"
                      title="Editar dirección"
                    >
                      <Edit3 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E2D5]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#3D2156]">Métodos de Pago</h2>
              <button className="px-4 py-2 bg-[#3D2156] text-white rounded-lg hover:bg-[#2A1A3E] transition-colors">
                Agregar tarjeta
              </button>
            </div>
            <div className="text-center py-12">
              <CreditCard size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">No tienes métodos de pago guardados</h3>
              <p className="text-gray-500 mb-6">Agrega una tarjeta para hacer compras más rápidas</p>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E2D5]">
            <h2 className="text-2xl font-bold text-[#3D2156] mb-6">Preferencias de Notificaciones</h2>
            <div className="space-y-6">
              {[
                { title: 'Nuevos productos', desc: 'Recibe notificaciones sobre nuevos lanzamientos' },
                { title: 'Ofertas especiales', desc: 'Entérate de descuentos y promociones exclusivas' },
                { title: 'Estado de pedidos', desc: 'Actualizaciones sobre tus compras y envíos' },
                { title: 'Newsletter KALLPA', desc: 'Historias de aventura y consejos de expertos' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-[#E8E2D5] last:border-b-0">
                  <div>
                    <h3 className="font-medium text-[#3D2156]">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      defaultChecked={index < 2}
                      aria-label={`Activar notificaciones para ${item.title}`}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3D2156]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3D2156]"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E2D5]">
              <h2 className="text-2xl font-bold text-[#3D2156] mb-6">Seguridad de la Cuenta</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between py-4 border-b border-[#E8E2D5]">
                  <div>
                    <h3 className="font-medium text-[#3D2156]">Cambiar contraseña</h3>
                    <p className="text-sm text-gray-600">Última actualización: hace 3 meses</p>
                  </div>
                  <button className="px-4 py-2 border border-[#3D2156] text-[#3D2156] rounded-lg hover:bg-[#3D2156] hover:text-white transition-colors">
                    Cambiar
                  </button>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-[#E8E2D5]">
                  <div>
                    <h3 className="font-medium text-[#3D2156]">Autenticación de dos factores</h3>
                    <p className="text-sm text-gray-600">Agrega una capa extra de seguridad</p>
                  </div>
                  <button className="px-4 py-2 bg-[#3D2156] text-white rounded-lg hover:bg-[#2A1A3E] transition-colors">
                    Activar
                  </button>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div>
                    <h3 className="font-medium text-[#3D2156]">Sesiones activas</h3>
                    <p className="text-sm text-gray-600">Gestiona dónde has iniciado sesión</p>
                  </div>
                  <button className="px-4 py-2 border border-[#3D2156] text-[#3D2156] rounded-lg hover:bg-[#3D2156] hover:text-white transition-colors">
                    Ver sesiones
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Zona de Peligro</h3>
              <p className="text-red-700 mb-4">Una vez que elimines tu cuenta, no hay vuelta atrás. Por favor, ten cuidado.</p>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Eliminar cuenta
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E7] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#3D2156] mb-2">Mi Cuenta</h1>
          <p className="text-gray-600">Gestiona tu perfil y preferencias de KALLPA</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm border border-[#E8E2D5] overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-[#3D2156] to-[#5A3A7A] text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-lg font-bold">
                    JD
                  </div>
                  <div>
                    <h3 className="font-semibold">Juan Pérez</h3>
                    <p className="text-white/80 text-sm">Explorador KALLPA</p>
                  </div>
                </div>
              </div>
              
              <nav className="p-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-[#3D2156] text-white'
                          : 'text-gray-700 hover:bg-[#F5F1E7]'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
                
                <div className="border-t border-[#E8E2D5] mt-2 pt-2">
                  <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors">
                    <LogOut size={18} />
                    <span className="font-medium">Cerrar Sesión</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;