json.extract! confirmation, :id, :name, :quantity, :phone, :created_at, :updated_at
json.url confirmation_url(confirmation, format: :json)
