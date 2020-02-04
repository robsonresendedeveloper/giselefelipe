class SessionsController < ApplicationController
	def new

	end

	def create
		user = User.find_by(name: params[:session][:name].downcase)

		if (user && (user.name ==  params[:session][:name] && user.password == params[:session][:password]))
			session[:user_id] = user.id
			flash[:success] = "Você fez seu login com sucesso"
			redirect_to confirmations_path
		else
			flash.now[:danger] = "Email ou Senha incorretos"
			render 'new'
		end
	end

	def destroy
		session[:user_id] = nil
		flash[:success] = "Você saiu! Te esperamos em breve!"
		redirect_to root_path
	end

end