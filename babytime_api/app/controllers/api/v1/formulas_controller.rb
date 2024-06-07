class Api::V1::FormulasController < Api::ApplicationController
    before_action :authenticate_user!
    # before_action :current_activity
    
    
        def create
            activity = Activity.find_by_user_id(current_user)

            formula = Formula.new params.require(:formula)
            .permit(
              :title,
              :amount,
              :note
            )
            formula.activity = activity
            if formula.save
               render json: {id: formula.id}
            else
                render(
                    json: {errors: formula.errors.messages },
                    status: 422 
                )
            end
        end
    
        def show
         
            formula = Formula.find params[:id]
            if formula.activity.user === current_user
            render(json: formula)
            
            else 
                render(json: {no: "no"})
            
            end
        end
    
        def update
            formula = Formula.find params[:id]
            if formula.update(formula_params)
                render json: {id: formula.id}
                # redirect_to question_path(@question)
                # ^^older syntax
              else
                render(
                    json: { errors: formula.errors.messages},
                    status: 422
                )
            end
        end
    
        def destroy
            formula = Formula.find params[:id]
            if formula.destroy
            
                render(
                    json:{status: 200}
                )
            else
                #head :bad_request
                render( json: {status:500})
            end
          end
    
    
    private
    def formula_params
        params.require(:formula).permit(:amount, :note, :created_at)
      end
end
