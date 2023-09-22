import React from "react";

export function Products() {
  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      description: "liamjames@example.com",
      price: "+1 (555) 000-000",
      position: "Software engineer",
      salary: "$100K",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Product designer",
      salary: "$90K",
    },
  ];

  return (
    <div className="my-10 flex w-full flex-col gap-8">
      <div className="  px-4 md:px-8">
        <div className="max-w-lg">
          <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
            Products
          </h3>
          <p className="mt-2 text-gray-600">A list of products</p>
        </div>
        <div className="mt-12 overflow-x-auto rounded-lg border shadow-sm">
          <table className="w-full table-auto text-left text-sm">
            <thead className="border-b bg-gray-50 font-medium text-gray-600">
              <tr>
                <th className="py-3 px-6">Image</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Description</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Contity</th>
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y text-gray-600">
              {tableItems.map((item, idx) => (
                <tr key={idx}>
                  <td className="flex items-center gap-x-3 whitespace-nowrap py-3 px-6">
                    <img src={item.avatar} className="h-10 w-10 rounded-full" />
                    <div>
                      <span className="block text-sm font-medium text-gray-700">
                        {item.name}
                      </span>
                      <span className="block text-xs text-gray-700">
                        {item.email}
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.phone_nimber}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.position}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{item.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
