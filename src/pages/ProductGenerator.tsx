import { useState, useEffect } from 'react';
import { categories } from '../data/categories';

function gerarId(name: string) {
  return name.toLowerCase().normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function ProductGenerator() {
  const [produtoAtual, setProdutoAtual] = useState({
    name: '',
    description: '',
    price: '',
    images: [''],
    categoryId: categories[0].id,
    stock: '',
    rating: '',
    sizes: ['']
  });

  const [produtos, setProdutos] = useState<string[]>([]);
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setProdutoAtual((prev) => ({ ...prev, [id]: value }));
  };

  const handleImageChange = (index: number, value: string) => {
    const novasImagens = [...produtoAtual.images];
    novasImagens[index] = value;
    setProdutoAtual((prev) => ({ ...prev, images: novasImagens }));
  };

  const adicionarImagem = () => {
    setProdutoAtual((prev) => ({ ...prev, images: [...prev.images, ''] }));
  };

  const handleSizeChange = (index: number, value: string) => {
    const novosTamanhos = [...produtoAtual.sizes];
    novosTamanhos[index] = value;
    setProdutoAtual((prev) => ({ ...prev, sizes: novosTamanhos }));
  };

  const adicionarTamanho = () => {
    setProdutoAtual((prev) => ({ ...prev, sizes: [...prev.sizes, ''] }));
  };

  const adicionarProduto = () => {
    const id = gerarId(produtoAtual.name);
    const sku = id.toUpperCase();

    const novoProduto: any = {
      id,
      sku,
      name: produtoAtual.name.trim(),
      description: produtoAtual.description.trim(),
      price: parseFloat(produtoAtual.price),
      images: produtoAtual.images.filter(img => img.trim() !== '').map(i => i.trim()),
      categoryId: produtoAtual.categoryId,
      stock: parseInt(produtoAtual.stock),
      rating: parseFloat(produtoAtual.rating)
    };

    if (produtoAtual.categoryId === 'calcados') {
      novoProduto.sizes = produtoAtual.sizes.filter(s => s.trim() !== '').map(s => s.trim());
    }

    const formatado = JSON.stringify(novoProduto, null, 2)
      .replace(/"([^"]+)":/g, '$1:')
      .replace(/"([^"]+)"/g, '"$1"');

    setProdutos((prev) => [...prev, formatado + ',']);

    setProdutoAtual({
      name: '',
      description: '',
      price: '',
      images: [''],
      categoryId: categories[0].id,
      stock: '',
      rating: '',
      sizes: ['']
    });
  };

  const gerarCodigo = () => {
    const formatadoFinal = produtos.join('\n\n');
    setOutput(formatadoFinal);
    setCopied(false);
  };

  const copiarCodigo = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Painel de Cadastro de Produtos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input id="name" value={produtoAtual.name} onChange={handleChange} className="input" placeholder="Nome do produto" />
        <input id="description" value={produtoAtual.description} onChange={handleChange} className="input" placeholder="Descrição curta" />
        <input id="price" type="number" step="0.01" value={produtoAtual.price} onChange={handleChange} className="input" placeholder="Preço (R$)" />
        <input id="stock" type="number" value={produtoAtual.stock} onChange={handleChange} className="input" placeholder="Estoque" />
        <input id="rating" type="number" step="0.1" value={produtoAtual.rating} onChange={handleChange} className="input" placeholder="Avaliação (0 a 5)" />
        
        <select id="categoryId" value={produtoAtual.categoryId} onChange={handleChange} className="input">
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>

        {/* Imagens */}
        <div className="sm:col-span-2 space-y-2">
          {produtoAtual.images.map((img, i) => (
            <input
              key={i}
              value={img}
              onChange={(e) => handleImageChange(i, e.target.value)}
              className="input w-full"
              placeholder={`URL da imagem ${i + 1}`}
            />
          ))}
          <button onClick={adicionarImagem} className="text-sm text-blue-700 hover:underline">➕ Adicionar mais imagem</button>
        </div>

        {/* Preview imagens */}
        {produtoAtual.images.some(i => i.trim()) && (
          <div className="sm:col-span-2 flex gap-4 flex-wrap justify-center">
            {produtoAtual.images.filter(i => i.trim()).map((src, i) => (
              <img key={i} src={src} alt="Preview" className="h-32 border rounded object-contain" />
            ))}
          </div>
        )}

        {/* Tamanhos (apenas para calçados) */}
        {produtoAtual.categoryId === 'calcados' && (
          <div className="sm:col-span-2 space-y-2">
            {produtoAtual.sizes.map((size, i) => (
              <input
                key={i}
                value={size}
                onChange={(e) => handleSizeChange(i, e.target.value)}
                className="input w-full"
                placeholder={`Tamanho ${i + 1}`}
              />
            ))}
            <button onClick={adicionarTamanho} className="text-sm text-blue-700 hover:underline">➕ Adicionar mais tamanhos</button>
          </div>
        )}
      </div>

      <div className="mt-6 flex gap-4 flex-wrap">
        <button onClick={adicionarProduto} className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded font-semibold">
          ➕ Adicionar produto
        </button>
        <button onClick={gerarCodigo} className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded font-semibold">
          🚀 Gerar código final
        </button>
      </div>

      {produtos.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Produtos adicionados: {produtos.length}</h2>
          <ul className="list-disc ml-6 text-sm text-gray-700">
            {produtos.map((_, i) => (
              <li key={i}>Produto #{i + 1}</li>
            ))}
          </ul>
        </div>
      )}

      {output && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2 flex justify-between items-center">
            Código final para colar:
            <button
              onClick={copiarCodigo}
              className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-1.5 rounded"
            >
              {copied ? '✅ Copiado!' : '📋 Copiar'}
            </button>
          </h2>
          <textarea
            value={output}
            readOnly
            className="w-full h-80 p-4 font-mono border rounded bg-gray-100 resize-none"
          />
        </div>
      )}
    </div>
  );
}
