class ConfirmationsController < ApplicationController
  before_action :set_confirmation, only: [:show, :edit, :update, :destroy]

  # GET /confirmations
  # GET /confirmations.json
  def index
    @confirmations = Confirmation.all
    #@total = Confirmation.sum("quantity")
  end

  # GET /confirmations/1
  # GET /confirmations/1.json
  def show
  end

  # GET /confirmations/new
  def new
    @confirmation = Confirmation.new
  end


  # POST /confirmations
  # POST /confirmations.json
  def create
    @confirmation = Confirmation.new(confirmation_params)
    @quantity = @confirmation.quantity.to_i
    @confirmation.quantity = @quantity

    respond_to do |format|
      if @confirmation.save
        format.html { redirect_to @confirmation, notice: 'Obrigado por confirmar a sua presença!' }
        format.json { render :show, status: :created, location: @confirmation }
      else
        format.html { render :new }
        format.json { render json: @confirmation.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /confirmations/1
  # DELETE /confirmations/1.json
  def destroy
    @confirmation.destroy
    respond_to do |format|
      format.html { redirect_to confirmations_url, notice: 'Confirmation was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_confirmation
      @confirmation = Confirmation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def confirmation_params
      params.require(:confirmation).permit(:name, :quantity, :phone)
    end
end
